"use client"
import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import phoneMockup from "@/assets/phone-mockup.png";
import Image from "next/image";

<motion.div>
    <Image src={phoneMockup} alt="App" />
</motion.div>

const Hero = () => {
    return (
        <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-hero-gradient opacity-5" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-primary/20 via-accent/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />

            <div className="container mx-auto px-4 relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center lg:text-left"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                        >
                            <Star className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-primary">Trusted by 10M+ users</span>
                        </motion.div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                            Send Money{" "}
                            <span className="bg-[linear-gradient(135deg,_hsl(217,91%,50%)_0%,_hsl(199,89%,48%)_50%,_hsl(174,72%,46%)_100%)] bg-clip-text text-transparent">
  Instantly
</span>


                            <br />
                            Anywhere, Anytime
                        </h1>

                        <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8">
                            Experience seamless digital payments with QuickPay. Send money to friends, pay bills, and manage your finances all in one secure app.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                            <Button size="lg" className="bg-hero-gradient hover:opacity-90 transition-opacity text-lg px-8 h-14 glow">
                                Download App
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button size="lg" variant="outline" className="text-lg px-8 h-14">
                                Learn More
                            </Button>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Shield className="w-5 h-5 text-accent" />
                                <span className="text-sm font-medium">Bank-grade Security</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Zap className="w-5 h-5 text-accent" />
                                <span className="text-sm font-medium">Instant Transfers</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content - Phone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-hero-gradient rounded-[3rem] blur-3xl opacity-30 scale-90 " />

                            {/* Phone image */}
                            <Image src={phoneMockup}  alt="App"  className="relative w-[280px] sm:w-[320px] lg:w-[380px] drop-shadow-2xl" />


                            {/* Floating cards */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6 }}
                                className="absolute -left-8 top-1/4 bg-card rounded-2xl p-4 shadow-card-hover border border-border text-gray-300"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                                        <Zap className="w-5 h-5 text-accent" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Sent to John</p>
                                        <p className="font-semibold text-foreground">$250.00</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 }}
                                className="absolute -right-4 bottom-1/4 bg-card rounded-2xl p-4 shadow-card-hover border border-border"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                        <Shield className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Transfer Complete</p>
                                        <p className="font-semibold text-accent">Secured ✓</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
