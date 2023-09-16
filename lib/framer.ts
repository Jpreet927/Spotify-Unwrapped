export const bannerContainer = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 100,
        transition: {
            duration: 1.5,
            delayChildren: 0,
            staggerChildren: 0.2,
            ease: "easeInOut",
        },
    },
};

export const bannerItem = {
    initial: {
        opacity: 0,
        filter: "blur(8px)",
    },
    animate: {
        opacity: 100,
        filter: "blur(0px)",
    },
};

export const topFiveContainer = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 100,
        transition: {
            delay: 0.5,
            duration: 1.5,
            staggerChildren: 0.3,
            ease: "easeInOut",
        },
    },
};

export const topFiveItem = {
    initial: {
        opacity: 0,
        y: 10,
    },
    animate: {
        opacity: 100,
        y: 0,
        transition: {
            duration: 1,
        },
    },
};

export const row = {
    hidden: {
        opacity: 0,
        y: 10,
    },
    visible: {
        opacity: 100,
        y: 0,
        transition: {
            delay: 0.5,
            duration: 1,
        },
    },
};
