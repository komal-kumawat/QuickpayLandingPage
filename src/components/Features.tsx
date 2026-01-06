"use client"
import { motion } from "framer-motion";
import {
    Send,
    Receipt,
    Gift,
    QrCode,
    CreditCard,
    PiggyBank,
    Smartphone,
    Globe
} from "lucide-react";

const features = [
    {
        icon: Send,
        title: "Instant Transfers",
        description: "Send money to anyone in seconds with just their phone number or email.",
    },
    {
        icon: Receipt,
        title: "Pay Bills",
        description: "Pay all your utility bills, subscriptions, and more from one place.",
    },
    {
        icon: Gift,
        title: "Rewards & Cashback",
        description: "Earn exciting rewards and cashback on every transaction you make.",
    },
    {
        icon: QrCode,
        title: "QR Payments",
        description: "Scan and pay instantly at millions of stores using QR codes.",
    },
    {
        icon: CreditCard,
        title: "Virtual Cards",
        description: "Create virtual cards for secure online shopping and subscriptions.",
    },
    {
        icon: PiggyBank,
        title: "Smart Savings",
        description: "Set savings goals and track your progress with intelligent insights.",
    },
    {
        icon: Smartphone,
        title: "Mobile Recharge",
        description: "Instant mobile recharge for all carriers with exclusive discounts.",
    },
    {
        icon: Globe,
        title: "Global Transfers",
        description: "Send money internationally with competitive exchange rates.",
    },
];

const Features = () => {
    return (
        <section id="features" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                        Features
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
                        Everything You Need in{" "}
                        <span style={{
                            background: "linear-gradient(135deg, hsl(217, 91%, 50%), hsl(199, 89%, 48%), hsl(174, 72%, 46%))",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            color: "transparent",
                        }}
                        >One App</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        From instant money transfers to bill payments and rewards, QuickPay makes managing your finances simple and rewarding.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border"
                        >
                            <div className="w-14 h-14  rounded-xl bg-hero-gradient flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300" style={{
                                background: "linear-gradient(135deg, hsl(217,91%,50%) 0%, hsl(199,89%,48%) 50%, hsl(174,72%,46%) 100%)",
                            }}>
                                <feature.icon className="w-7 h-7  text-primary-foreground"  />
                            </div>
                            <h3 className="text-lg font-semibold font-display mb-2 text-foreground">
                                {feature.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
