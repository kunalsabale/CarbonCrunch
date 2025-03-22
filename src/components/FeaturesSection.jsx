"use client"

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CloudUpload, BarChart, FileCheck, Brain, PieChart, Bell } from 'lucide-react';

const FeaturesSection = () => {
    const containerRef = useRef(null);
    const section1Ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const scrollYProgress1 = useScroll({
        target: section1Ref,
        offset: ["start end", "end start"],
    }).scrollYProgress;

    // Parallax effect for the image (enhanced)
    const imageTranslateY = useTransform(scrollYProgress, [0, 1], [0, -300]); // Increased range for more noticeable effect

    // Features section animations
    const featuresOpacity = useTransform(scrollYProgress1, [0, 0.2, 1], [0.6, 1, 0.8]);
    const featuresTranslateY = useTransform(scrollYProgress1, [0, 0.5, 1], [30, 0, 20]);

    // Parallax effect for each stat grid
    const stat1Y = useTransform(scrollYProgress, [0, 1], [50, -100]);  // Each stat moves at a slightly different rate
    const stat2Y = useTransform(scrollYProgress, [0, 1], [100, -50]);
    const stat3Y = useTransform(scrollYProgress, [0, 1], [150, 0]);
    const stat4Y = useTransform(scrollYProgress, [0, 1], [200, 50]);

    const features = [
        { title: "Automated Data Collection", description: "Our system automates carbon data collection, saving time, reducing errors, and ensuring accurate sustainability reporting.", icon: <CloudUpload className="w-10 h-10 text-green-500" /> },
        { title: "Monitoring & Reporting", description: "Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting.", icon: <BarChart className="w-10 h-10 text-green-500" /> },
        { title: "Simplified Certification Process", description: "Streamline your certification process with our simplified, automated solution, reducing complexity and ensuring faster compliance.", icon: <FileCheck className="w-10 h-10 text-green-500" /> },
        { title: "AI-Driven Insights", description: "Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making.", icon: <Brain className="w-10 h-10 text-green-500" /> },
        { title: "Advanced Analytics", description: "Use advanced analytics to gain deeper insights into your carbon footprint and sustainability efforts.", icon: <PieChart className="w-10 h-10 text-green-500" /> },
        { title: "Real-Time Alerts", description: "Receive real-time alerts for critical carbon emission thresholds and take immediate action.", icon: <Bell className="w-10 h-10 text-green-500" /> },
    ];

    const stats = [
        { value: "3X", label: "ESG High Performers Deliver A Higher Total Shareholder Return", bgColor: "bg-green-500", textColor: "text-white", position: "top-[10%] right-[19%]", y: stat1Y },
        { value: "98%", label: "Of CEOs Agree Sustainability Is Their Responsibility", bgColor: "bg-gray-800", textColor: "text-white", position: "top-[30%] right-[40%]", y: stat2Y },
        { value: "18%", label: "Of Companies Are Cutting Emissions Fast Enough To Reach Net Zero By 2050", bgColor: "bg-gray-800", textColor: "text-white", position: "top-[50%] right-[25%]", y: stat3Y },
        { value: "37%", label: "Of The World's Largest Companies Have A Public Net Zero Target. Nearly All Are Off Track", bgColor: "bg-white", textColor: "text-green-600", position: "bottom-[8%] right-[45%]", y: stat4Y },
    ];

    return (
        <div ref={containerRef} className="relative bg-gray-50">
            {/* Features Section */}
            <section 
                ref={section1Ref} 
                className="relative w-full min-h-screen flex flex-col justify-center items-center py-16 px-4 sm:px-6 lg:px-8 z-10"
            >
                <div className="flex justify-center mb-6">
                    <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide">
                        Features
                    </span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12 tracking-tight">
                    Why Carbon Crunch?
                </h1>
                <motion.div 
                    className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    style={{ y: featuresTranslateY, opacity: featuresOpacity }}
                >
                    {features.map((feature, index) => (
                        <motion.div 
                            key={index} 
                            className="relative p-6 bg-white/90 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 backdrop-blur-sm"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.03 }}
                        >
                            <div className="flex items-center justify-center mb-4">{feature.icon}</div>
                            <h2 className="text-lg sm:text-xl font-semibold text-green-500 mb-3 text-center">{feature.title}</h2>
                            <p className="text-gray-600 text-sm text-center leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Stats Section */}
            <section className="relative w-full h-[100vh] z-0">
                <motion.div 
                    className="absolute left-0 w-1/2 h-full"
                    style={{ y: imageTranslateY }}
                >
                    <img
                        src="/images/background1.jpg"
                        alt="Sustainability Background"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
                <div className="relative w-full h-full container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className={`absolute p-6 rounded-lg shadow-lg ${stat.bgColor} ${stat.textColor} w-[280px] sm:w-[320px] md:w-[360px] ${stat.position} md:${stat.position}`}
                            style={{ y: stat.y }} // Apply parallax effect to each grid
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
                        >
                            <h3 className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</h3>
                            <p className="text-xs sm:text-sm leading-relaxed">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default FeaturesSection;