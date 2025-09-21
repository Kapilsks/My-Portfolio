"use client"

import * as React from "react"
import { ModeToggle } from "./ModeToggle"
import {
    Navbar as Nav,
    NavBody,
    NavItems,
    MobileNav,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { Download } from "lucide-react";
export function Navbar() {


    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);


    const navItems = [
        { name: "About", link: "#about" },
        { name: "Skills", link: "#skills" },
        { name: "Projects", link: "#projects" },
        { name: "Education", link: "#education" },
        { name: "Contact", link: "#contact" },
    ]

    const handleDownloadResume = () => {
        
        const resumeUrl = "https://drive.google.com/file/d/1uOMTDYnzX7imKIRbEvUOfi8iIGnK7xB0/view?usp=drive_link"
        const link = document.createElement("a")
        link.href = resumeUrl
        link.download = "kapilsharmaresume.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <main className="fixed w-full z-20">
            <Nav>
                {/* Desktop Navigation */}
                <NavBody>
                    {/* <NavbarLogo /> */}
                    <button
                        type="button"
                        className="font-bold text-2xl font-sans cursor-pointer bg-transparent border-none outline-none p-0 m-0"
                        onClick={() => {
                            if (typeof window !== "undefined") {
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }
                        }}
                        aria-label="Scroll to top"
                    >
                        &lt;KS/&gt;
                    </button>
                    <NavItems items={navItems} />
                    <div className="flex items-center">
                        <NavbarButton
                            onClick={() => {
                                handleDownloadResume()
                                setIsMobileMenuOpen(false)
                            }}
                            variant="secondary"
                            className="flex items-center gap-2 w-full justify-center dark:bg-neutral-800 dark:text-white"
                        >
                            <Download className="h-4 w-4 dark:text-white" />Resume

                        </NavbarButton>
                        <NavbarButton variant="secondary">
                            <ModeToggle />
                        </NavbarButton>
                    </div>
                </NavBody>

                {/* Mobile Navigation Implement krte hai */}
                <MobileNav>
                    <MobileNavHeader>
                        <button
                            type="button"
                            className="font-bold text-md font-sans cursor-pointer bg-transparent border-none outline-none p-0 m-0"
                            onClick={() => {
                                if (typeof window !== "undefined") {
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                }
                            }}
                            aria-label="Scroll to top"
                        >
                            &lt;SM/&gt;
                        </button>
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        />
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                    >
                        {navItems.map((item, idx) => (
                            <a
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative text-neutral-600 dark:text-neutral-300"
                            >
                                <span className="block">{item.name}</span>
                            </a>
                        ))}
                        <div className="flex w-full justify-center flex-col gap-4">
                            <NavbarButton
                                onClick={() => {
                                    handleDownloadResume()
                                    setIsMobileMenuOpen(false)
                                }}
                                variant="secondary"
                                className="flex items-center gap-2 w-full justify-center dark:bg-neutral-800 dark:text-white"
                            >
                                <Download className="h-4 w-4 dark:text-white" />Resume

                            </NavbarButton>
                            <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="secondary"

                            >
                                <ModeToggle />
                            </NavbarButton>
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Nav>
        </main>
    )
}
