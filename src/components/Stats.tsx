"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "10M+", label: "Active Users" },
  { value: "$5B+", label: "Transactions Processed" },
  { value: "150+", label: "Countries Supported" },
  { value: "99.9%", label: "Uptime Guaranteed" },
];

export default function Stats() {
    return (
        <section className="grid grid-cols-2 gap-8 p-10" style={{
            background: "linear-gradient(135deg, hsl(217,91%,50%) 0%, hsl(199,89%,48%) 50%, hsl(174,72%,46%) 100%)",
        }}>
            {stats.map((stat, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h3 className="text-3xl font-bold">{stat.value}</h3>
                    <p className="text-muted-foreground">{stat.label}</p>
                </motion.div>
            ))}
        </section>
    );
}
