"use client"
import { motion } from "framer-motion";
import { ArrowRight, Apple, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-hero-gradient opacity-[0.03]" />

            <div className="container mx-auto px-4 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-card rounded-3xl p-8 sm:p-12 lg:p-16 shadow-card-hover border border-border relative overflow-hidden"
                >
                    {/* Decorative gradient */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-hero-gradient opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <div className="relative text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
                            Ready to Transform Your{" "}
                            <span style={{
                                background: "linear-gradient(135deg, hsl(217, 91%, 50%), hsl(199, 89%, 48%), hsl(174, 72%, 46%))",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                color: "transparent",
                            }}
                            >Financial Life?</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                            Download QuickPay today and join millions of users enjoying fast, secure, and rewarding digital payments.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-foreground hover:bg-foreground/90 text-background h-14 px-6 text-base"
                            >
                                <Apple className="w-6 h-6 mr-3" />
                                <div className="text-left">
                                    <div className="text-xs opacity-80">Download on the</div>
                                    <div className="font-semibold">App Store</div>
                                </div>
                            </Button>
                            <Button
                                size="lg"
                                className="bg-foreground hover:bg-foreground/90 text-background h-14 px-6 text-base"
                            >
                                <Play className="w-6 h-6 mr-3" />
                                <div className="text-left">
                                    <div className="text-xs opacity-80">Get it on</div>
                                    <div className="font-semibold">Google Play</div>
                                </div>
                            </Button>
                        </div>

                        <p className="text-sm text-muted-foreground mt-8 flex items-center justify-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
                            Free to download • No hidden fees • Cancel anytime
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
