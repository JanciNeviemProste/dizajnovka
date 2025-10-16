import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Meno musí mať aspoň 2 znaky"),
  company: z.string().optional(),
  email: z.string().email("Neplatná emailová adresa"),
  phone: z.string().optional(),
  systemType: z.string().optional(),
  message: z.string().min(10, "Správa musí mať aspoň 10 znakov"),
  consent: z.boolean().refine((val) => val === true, {
    message: "Musíte súhlasiť so spracovaním osobných údajov",
  }),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the request body
    const validatedData = contactSchema.parse(body)

    // TODO: Here you would typically:
    // 1. Send email notification (using services like SendGrid, Resend, etc.)
    // 2. Save to database
    // 3. Send to CRM/webhook

    // For now, just log the data
    console.log("Contact form submission:", validatedData)

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Správa bola úspešne odoslaná",
      },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          errors: error.errors.map((err) => ({
            field: err.path.join("."),
            message: err.message,
          })),
        },
        { status: 400 }
      )
    }

    console.error("Contact form error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Nastala chyba pri odosielaní správy",
      },
      { status: 500 }
    )
  }
}

// Optional: Handle other methods
export async function GET() {
  return NextResponse.json(
    { message: "Contact endpoint - use POST method to submit form" },
    { status: 405 }
  )
}