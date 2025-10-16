import Link from "next/link"
import { Leaf, Mail, Phone, MapPin } from "lucide-react"
import { navigation, siteContent } from "@/lib/content"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-green-600" />
              <span className="font-bold text-xl">Zelené fasády</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {siteContent.company.description}
            </p>
            <div className="flex flex-col space-y-2 text-sm">
              <a href="tel:+421900123456" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-4 w-4" />
                <span>+421 900 123 456</span>
              </a>
              <a href="mailto:info@zelenefasady.sk" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-4 w-4" />
                <span>info@zelenefasady.sk</span>
              </a>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Bratislava, Slovensko</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Služby</h3>
            <ul className="space-y-2">
              {navigation.footer.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Spoločnosť</h3>
            <ul className="space-y-2">
              {navigation.footer.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Právne</h3>
            <ul className="space-y-2">
              {navigation.footer.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Zelené fasády. Všetky práva vyhradené.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Facebook
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                LinkedIn
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}