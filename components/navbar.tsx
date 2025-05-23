"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  Menu,
  X,
  Sun,
  Moon,
  BookOpen,
  Trophy,
  History,
  User,
  LogOut,
  LogIn,
  UserPlus,
  Video,
  Home,
  Brain,
  Gamepad2,
  LayoutDashboard,
  Search,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useAuth } from "@/contexts/auth-context"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const { user, logout } = useAuth()
  const router = useRouter()

  // After mounting, we have access to the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const handleProfileClick = () => {
    router.push("/profile")
    closeMenu()
  }

  const navLinks = [
    {
      name: "Home",
      href: "/",
      active: pathname === "/",
      icon: Home,
    },
    {
      name: "Dashboard",
      href: "/dashboard",
      active: pathname === "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Subjects",
      href: "/subjects",
      active: pathname === "/subjects" || pathname?.startsWith("/subjects/"),
      icon: BookOpen,
    },
    {
      name: "Quiz",
      href: "/quiz",
      active: pathname === "/quiz" || pathname?.startsWith("/quiz/"),
      icon: Brain,
    },
    {
      name: "Games",
      href: "/games",
      active: pathname === "/games" || pathname?.startsWith("/games/"),
      icon: Gamepad2,
    },
    {
      name: "Video Search",
      href: "/video-search",
      active: pathname === "/video-search",
      icon: Video,
    },
    {
      name: "Test Your Level",
      href: "/test-your-level",
      active: pathname === "/test-your-level",
      icon: Trophy,
    },
    {
      name: "Question Generator",
      href: "/question-generator",
      active: pathname === "/question-generator",
      icon: Brain,
    },
    {
      name: "Search Learn Test",
      href: "/search-learn-test",
      active: pathname === "/search-learn-test",
      icon: Search,
    },
  ]

  const userLinks = user
    ? [
        {
          name: "Profile",
          href: "/profile",
          active: pathname === "/profile",
          icon: User,
        },
        {
          name: "History",
          href: "/history",
          active: pathname === "/history",
          icon: History,
        },
        {
          name: "Achievements",
          href: "/achievements",
          active: pathname === "/achievements",
          icon: Trophy,
        },
      ]
    : [
        {
          name: "Sign In",
          href: "/signin",
          active: pathname === "/signin",
          icon: LogIn,
        },
        {
          name: "Sign Up",
          href: "/signup",
          active: pathname === "/signup",
          icon: UserPlus,
        },
      ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
            <span className="font-bold text-xl">EduPlay</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 ml-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                  link.active ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.icon && <link.icon className="h-4 w-4" />}
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="mr-2" onClick={toggleTheme} aria-label="Toggle theme">
            {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <>
                <Button variant="ghost" size="sm" onClick={handleProfileClick} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                    <span className="text-sm font-medium">{user.name?.charAt(0) || "U"}</span>
                  </div>
                  <div className="text-sm font-medium">{user.name || "User"}</div>
                </Button>
                <Button variant="ghost" size="sm" onClick={logout} className="flex items-center gap-2">
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </Button>
              </>
            ) : (
              <>
                <Link href="/signin">
                  <Button variant="ghost" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button>Sign Up</Button>
                </Link>
              </>
            )}
          </div>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
              <span className="font-bold text-xl">EduPlay</span>
            </Link>

            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <X className="h-6 w-6" />
            </Button>
          </div>

          <nav className="container grid gap-6 pb-20 pt-6 overflow-y-auto max-h-[calc(100vh-4rem)]">
            {/* User profile section at the top for mobile */}
            {user && (
              <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-lg font-bold">{user.name?.charAt(0) || "U"}</span>
                </div>
                <div>
                  <div className="font-medium text-lg">{user.name || "User"}</div>
                  <Button variant="link" className="text-sm text-primary p-0 h-auto" onClick={handleProfileClick}>
                    View Profile
                  </Button>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 p-3 rounded-lg ${
                    link.active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-secondary/50"
                  }`}
                  onClick={closeMenu}
                >
                  {link.icon && <link.icon className="h-5 w-5" />}
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="border-t pt-4">
              <div className="grid grid-cols-1 gap-3">
                {user ? (
                  <>
                    {userLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`flex items-center gap-3 p-3 rounded-lg ${
                          link.active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-secondary/50"
                        }`}
                        onClick={closeMenu}
                      >
                        {link.icon && <link.icon className="h-5 w-5" />}
                        {link.name}
                      </Link>
                    ))}
                    <button
                      className="flex items-center gap-3 p-3 rounded-lg text-red-500 hover:bg-red-500/10 w-full text-left"
                      onClick={() => {
                        logout()
                        closeMenu()
                      }}
                    >
                      <LogOut className="h-5 w-5" />
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/signin"
                      className="flex items-center gap-3 p-3 rounded-lg text-muted-foreground hover:bg-secondary/50"
                      onClick={closeMenu}
                    >
                      <LogIn className="h-5 w-5" />
                      Sign In
                    </Link>
                    <Link
                      href="/signup"
                      className="flex items-center gap-3 p-3 rounded-lg bg-primary text-primary-foreground"
                      onClick={closeMenu}
                    >
                      <UserPlus className="h-5 w-5" />
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>

            {/* Theme toggle in mobile menu */}
            <div className="border-t pt-4">
              <button
                className="flex items-center gap-3 p-3 rounded-lg text-muted-foreground hover:bg-secondary/50 w-full text-left"
                onClick={toggleTheme}
              >
                {mounted && theme === "dark" ? (
                  <>
                    <Sun className="h-5 w-5" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-5 w-5" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}