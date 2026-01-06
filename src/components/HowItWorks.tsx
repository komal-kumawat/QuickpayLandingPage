"use client"
import { motion } from "framer-motion";
import { Download, UserPlus, CreditCard, CheckCircle } from "lucide-react";

const steps = [
    {
        icon: Download,
        step: "01",
        title: "Download the App",
        description: "Get QuickPay from the App Store or Google Play. It's free!",
    },
    {
        icon: UserPlus,
        step: "02",
        title: "Create Your Account",
        description: "Sign up in under 2 minutes with just your phone number.",
    },
    {
        icon: CreditCard,
        step: "03",
        title: "Add Payment Method",
        description: "Link your bank account or card securely with 256-bit encryption.",
    },
    {
        icon: CheckCircle,
        step: "04",
        title: "Start Transacting",
        description: "Send money, pay bills, and enjoy cashback rewards instantly.",
    },
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-24">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                        How It Works
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
                        Get Started in{" "}
                        <span style={{
                            background: "linear-gradient(135deg, hsl(217, 91%, 50%), hsl(199, 89%, 48%), hsl(174, 72%, 46%))",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            color: "transparent",
                        }}
                        >Minutes</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Join millions of users who trust QuickPay for their daily transactions. Setting up is quick and easy.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.step}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="relative"
                        >
                            {/* Connector line */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/30 to-transparent" />
                            )}

                            <div className="text-center relative">
                                {/* Step number */}
                                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-card border-2 border-primary/20 mb-6 relative shadow-card">
                                    <step.icon className="w-8 h-8 text-primary" />
                                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-hero-gradient text-primary-foreground text-sm font-bold flex items-center justify-center" style={{
      background: "linear-gradient(135deg, hsl(217,91%,50%) 0%, hsl(199,89%,48%) 50%, hsl(174,72%,46%) 100%)",
    }}
>
                                        {step.step}
                                    </span>
                                </div>

                                <h3 className="text-xl font-semibold font-display mb-3 text-foreground">
                                    {step.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
