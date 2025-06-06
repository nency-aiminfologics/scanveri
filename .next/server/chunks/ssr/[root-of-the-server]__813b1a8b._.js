module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/app/Components/Navbar/Navbar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Navbar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function Navbar() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Function to handle smooth scrolling to a section
    const scrollToSection = (sectionId)=>{
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth"
            });
        }
        // Close the mobile menu after clicking a link
        setIsOpen(false);
    };
    // Listen to scroll events and toggle isScrolled state
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            // Check if the user has scrolled past a certain threshold (e.g., 50px)
            const scrolled = window.scrollY > 50;
            console.log("Scroll position:", window.scrollY, "isScrolled:", scrolled); // Debug log
            setIsScrolled(scrolled);
        };
        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);
        // Trigger handleScroll on mount to set initial state
        handleScroll();
        // Cleanup the event listener on component unmount
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed z-30 w-full top-0 left-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "2xl:w-[1440px] xl:w-[1280px] lg:w-[1024px] md:w-[768px] w-[100%] mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "2xl:w-[1350px] xl:w-[1150px] lg:w-[904px] md:w-[668px] w-[90%] mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `2xl:w-[964px] xl:w-[964px] lg:w-[885px] md:w-[664px] w-full 2xl:h-[93px] 
                xl:h-[93px] lg:h-[82px] md:h-[62px] h-[56px] 2xl:mt-[44px] xl:mt-[40px] lg:mt-[20px] md:mt-[15px] mt-[10px] 2xl:rounded-[20px] xl:rounded-[20px] lg:rounded-[18px] md:rounded-[15px] rounded-[12px] mx-auto px-4 flex justify-between items-center transition-all duration-300 ${isScrolled ? "bg-white shadow-custom" : "bg-[#FFFFFF1A] backdrop-blur-[4px]"}`,
                        style: isScrolled ? {
                            boxShadow: "0px 4px 30px #D8D8D866"
                        } : {},
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/Images/logo.svg",
                                alt: "logo",
                                width: 66,
                                height: 66,
                                className: "2xl:my-[13px] xl:my-[13px] lg:my-[16px] md:my-[12px] my-[8px] 2xl:w-[66px]  2xl:h-[66px] xl:w-[66px] xl:h-[66px] lg:w-[50.67px] lg:h-[50.67px] md:w-[38px] md:h-[38px] w-[38px] h-[38px]"
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: `2xl:flex xl:flex lg:flex md:flex 2xl:w-[524px] xl:w-[524px] lg:w-[527px] 
                md:w-[399px] 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[14px] leading-[100%] items-center geologica font-medium justify-between hidden transition-colors duration-300 ${isScrolled ? "text-[#1B1A1F]" : "text-[#FFFFFF]"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        onClick: ()=>scrollToSection("home"),
                                        className: `cursor-pointer transition-colors ${isScrolled ? "hover:text-[#1DD673]" : "hover:text-[#1DD673]"}`,
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        onClick: ()=>scrollToSection("what-makes"),
                                        className: `cursor-pointer transition-colors ${isScrolled ? "hover:text-[#1DD673]" : "hover:text-[#1DD673]"}`,
                                        children: "Features"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        onClick: ()=>scrollToSection("scan"),
                                        className: `cursor-pointer transition-colors ${isScrolled ? "hover:text-[#1DD673]" : "hover:text-[#1DD673]"}`,
                                        children: "Who It's For"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        onClick: ()=>scrollToSection("integrate"),
                                        className: `cursor-pointer transition-colors ${isScrolled ? "hover:text-[#1DD673]" : "hover:text-[#1DD673]"}`,
                                        children: "Integrate With Your App"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `bg-[#1B1A1F] 2xl:w-[141px] 2xl:h-[56px] xl:w-[141px] xl:h-[56px] lg:w-[137.33px] 
                lg:h-[56px] md:w-[100px] md:h-[42px] hidden 2xl:block xl:block lg:block md:block 2xl:rounded-[15px] 
                xl:rounded-[15px] lg:rounded-[12px] md:rounded-[8px] 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[13px] leading-[100%] 2xl:my-[19px] xl:my-[19px] lg:my-[13.33px] md:my-[10px] geologica font-medium transition-colors duration-300 ${isScrolled ? "text-white" : "text-[#FFFFFF]"}`,
                                children: "Get free trial"
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsOpen(!isOpen),
                                    className: "w-[33px] h-[33px] bg-[#ffffff] rounded-[5px] flex items-center justify-center",
                                    children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#1B1A1F] text-[20px] font-bold",
                                        children: "X"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                        lineNumber: 122,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Images/menu.svg",
                                        alt: "menu",
                                        width: 25,
                                        height: 25
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                        lineNumber: 124,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `fixed top-0 right-0 h-screen w-[80vw] bg-[#FFFFFF] shadow-lg z-40 px-12 py-5 text-[#1B1A1F] text-base font-medium geologica flex flex-col transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsOpen(false),
                                    className: "text-black text-2xl font-bold",
                                    children: "X"
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                    lineNumber: 138,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col space-y-4 mt-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        onClick: ()=>scrollToSection("home"),
                                        className: "cursor-pointer hover:text-[#1DD673] transition-colors",
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        onClick: ()=>scrollToSection("what-makes"),
                                        className: "cursor-pointer hover:text-[#1DD673] transition-colors",
                                        children: "Features"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        onClick: ()=>scrollToSection("scan"),
                                        className: "cursor-pointer hover:text-[#1DD673] transition-colors",
                                        children: "Who It's For"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        onClick: ()=>scrollToSection("integrate"),
                                        className: "cursor-pointer hover:text-[#1DD673] transition-colors",
                                        children: "Integrate With Your App"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "bg-[#1B1A1F] text-[#FFFFFF] px-4 py-2 rounded-md w-full mt-10",
                                children: "Get free trial"
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Components/Navbar/Navbar.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/Components/Navbar/Navbar.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Components/Navbar/Navbar.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/Components/How its works/How its works.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Howitsworks)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-slick/lib/index.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function Howitsworks() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2.1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2.1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "2xl:w-[1440px] xl:w-[1280px]  2xl:py-[115px]  xl:py-[103px] lg:py-[80px] md:py-[60px]   py-[80px] mx-auto hidden md:hidden 2xl:block xl:block lg:block",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "2xl:w-[1350px] xl:w-[1150px] lg:w-[904px] mx-auto ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-[#1B1A1F] font-bold geologica  2xl:text-[40px] xl:text-[36px] md:text-[34px] lg:text-[45.33px] leading-[130%] text-center",
                                children: "How its works"
                            }, void 0, false, {
                                fileName: "[project]/app/Components/How its works/How its works.tsx",
                                lineNumber: 44,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex 2xl:gap-[30px] xl:gap-[26px] lg:gap-[20px] 2xl:mt-[35px] xl:mt-[30px]  lg:mt-[50px] 2xl:w-[1226px] xl:w-[1089px] lg:w-[904px] mx-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/Images/how-bg-1.png",
                                                    alt: "/Images/how-bg-1.png",
                                                    width: 279,
                                                    height: 518,
                                                    className: "2xl:w-[388px] 2xl:h-[655px] xl:w-[345px] xl:h-[582px] lg:w-[298px] lg:h-[548px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-0 left-0 z-10",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-[#1DD673] 2xl:w-[245px] 2xl:h-[406px] xl:w-[217.78px] xl:h-[360.89px] lg:w-[188px] lg:h-[311px] 2xl:rounded-[18px] xl:rounded-[16px] lg:rounded-[14px]   2xl:mx-[72px] xl:mx-[63.11px] lg:mx-[54px] 2xl:mt-[35px] xl:mt-[31.11px] lg:mt-[53px]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/Images/how-1.png",
                                                            alt: "how-1",
                                                            width: 211,
                                                            height: 0,
                                                            className: "2xl:w-[271px] xl:w-[241.89px] lg:w-[213px] absolute z-10 2xl:top-[10%] xl:top-[10%] lg:top-[17%]  2xl:left-[15%] xl:left-[15%] lg:left-[14%]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                            lineNumber: 66,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "2xl:w-[388px] 2xl:h-[148px]  xl:w-[345px] xl:h-[131px] lg:w-[288px] lg:h-[122px] border border-[#7D7C814D] absolute 2xl:top-[77.2%] xl:top-[77.3%] lg:top-[77.7%] z-20 rounded-b-[15px] bg-[#ffffff]   ",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "xl:w-[267px] 2xl:w-[300px] lg:w-[250px] 2xl:mx-4 xl:mx-4 lg:mx-3 lg:my-3 2xl:my-6 xl:my-6 ",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                className: "text-[#1DD673] geologica font-normal 2xl:text-[14px] xl:text-[14px] lg:text-[13px] leading-[100%]",
                                                                children: "Step 1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                lineNumber: 82,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                className: "text-[#1B1A1F] geologica font-bold 2xl:text-[28px] xl:text-[24px] lg:text-[24px] leading-[100%]  2xl:mt-[15px] xl:mt-[11px] lg:mt-[10px]",
                                                                children: "Scan"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                lineNumber: 84,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[#7D7C81] geologica font-light 2xl:w-[300px] xl:w-[266px] lg:w-[250px] 2xl:text-[18px] xl:text-[16px] lg:text-[15px] leading-[125%]  2xl:mt-[10px] xl:mt-[5px] lg:mt-[10px]",
                                                                children: "Use the app to scan food products with a barcode or live camera."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                lineNumber: 87,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Components/How its works/How its works.tsx",
                                            lineNumber: 56,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/How its works/How its works.tsx",
                                        lineNumber: 55,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative 2xl:mt-[80px] xl:mt-[70px] lg:mt-[60px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/Images/how-bg-2.png",
                                                alt: "/Images/how-bg-2.png",
                                                width: 279,
                                                height: 518,
                                                className: " 2xl:w-[388px] 2xl:h-[655px] xl:w-[345px] xl:h-[582px]  lg:w-[298px] lg:h-[548px]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                lineNumber: 102,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0  z-20  2xl:w-[388px] 2xl:h-[148px] xl:w-[345px] xl:h-[131px] lg:w-[288px] lg:h-[122px] border border-[#7D7C814D] 2xl:rounded-t-[20px] xl:rounded-t-[20px] lg:rounded-t-[16px] bg-[#ffffff] border-b-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "xl:w-[267px] 2xl:w-[300px] lg:w-[250px] 2xl:mx-4 xl:mx-4 lg:mx-3 lg:my-3 2xl:my-6 xl:my-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                            className: "text-[#FF733D] geologica font-normal 2xl:text-[14px] xl:text-[14px] lg:text-[13px] leading-[100%]",
                                                            children: "Step 2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                            lineNumber: 109,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                            className: "text-[#1B1A1F] geologica font-bold 2xl:text-[28px] xl:text-[24px] lg:text-[24px] leading-[100%]  2xl:mt-[15px] xl:mt-[11px] lg:mt-[10px]",
                                                            children: "Analyse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                            lineNumber: 111,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#7D7C81] geologica font-light 2xl:w-[300px] xl:w-[266px] lg:w-[250px] 2xl:text-[18px] xl:text-[16px] lg:text-[15px] leading-[125%]  2xl:mt-[10px] xl:mt-[5px] lg:mt-[10px]",
                                                            children: "Our AI processes the data and delivers a complete health analysis."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                            lineNumber: 114,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                lineNumber: 105,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute z-10 top-[25%]  left-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-[#FF733D] 2xl:w-[245px] 2xl:h-[406px] xl:w-[217.78px] xl:h-[360.89px] lg:w-[187px] lg:h-[376px] 2xl:rounded-[18px] xl:rounded-[16px] lg:rounded-[14px] lg:mx-[54.79px]  2xl:mx-[72px] xl:mx-[64px] 2xl:mt-[32px] xl:mt-[27.67px] lg:mt-[30px]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                src: "/Images/how-2.png",
                                                                alt: "how-1",
                                                                width: 211,
                                                                height: 0,
                                                                className: "2xl:w-[271px] 2xl:h-[445px] xl:w-[240.89px]  xl:h-[397px] lg:w-[217px]   absolute z-10 top-[10%]   2xl:left-[15%] xl:left-[15%] lg:left-[14%] "
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                lineNumber: 129,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "2xl:w-[284px] 2xl:h-[76px] xl:w-[252.44px] xl:h-[70.22px] lg:w-[218px] lg:h-[56px] bg-[#FFFFFF] 2xl:rounded-[9px] xl:rounded-[8px] lg:rounded-[7px] flex  2xl:gap-[26px] xl:gap-[22.22px] lg:gap-[19px]  2xl:top-[93%] xl:top-[93%] lg:top-[86%] 2xl:left-[7%] xl:left-[7%] lg:left-[9%] absolute z-20 2xl:px-[21px] xl:px-[16px] lg:px-[15px] 2xl:py-[8px] xl:py-[5.33px] lg:py-[4.94px]",
                                                                style: {
                                                                    boxShadow: "0px 0px 50px #0000001F"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "2xl:w-[41.25px] 2xl:h-[58.79px] xl:w-[36.67px] xl:h-[59.03px] lg:w-[31.63px] lg:h-[52.11px]",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                src: "/Images/carbs.svg",
                                                                                alt: "carbs",
                                                                                width: 42,
                                                                                height: 42,
                                                                                className: "2xl:w-[42px] 2xl:h-[42px] xl:w-[37.33px] xl:h-[37.33px] lg:w-[32.2px] lg:h-[32.2px]"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                                lineNumber: 141,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                                className: "text-[#111827] geologica text-center font-normal leading-3eading-[150%] 2xl:text-[12px] xl:text-[10.67px]  lg:text-[10px]",
                                                                                children: "Carbs"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                                lineNumber: 143,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                        lineNumber: 140,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "2xl:w-[41.25px] 2xl:h-[58.79px] xl:w-[36.67px] xl:h-[59.03px] lg:w-[31.63px] lg:h-[52.11px]",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                src: "/Images/Protein.svg",
                                                                                alt: "Protein",
                                                                                width: 42,
                                                                                height: 42,
                                                                                className: "2xl:w-[42px] 2xl:h-[42px] xl:w-[37.33px] xl:h-[37.33px] lg:w-[32.2px] lg:h-[32.2px]"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                                lineNumber: 148,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                                className: "text-[#111827] geologica text-center font-normal leading-3eading-[150%] 2xl:text-[12px] xl:text-[10.67px]  lg:text-[10px]",
                                                                                children: "Protein"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                                lineNumber: 150,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                        lineNumber: 147,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "2xl:w-[41.25px] 2xl:h-[58.79px] xl:w-[36.67px] xl:h-[59.03px] lg:w-[31.63px] lg:h-[52.11px]",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                src: "/Images/Sodium.svg",
                                                                                alt: "Sodium",
                                                                                width: 42,
                                                                                height: 42,
                                                                                className: "2xl:w-[42px] 2xl:h-[42px] xl:w-[37.33px] xl:h-[37.33px] lg:w-[32.2px] lg:h-[32.2px]"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                                lineNumber: 155,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                                className: "text-[#111827] geologica text-center font-normal leading-3eading-[150%] 2xl:text-[12px] xl:text-[10.67px]  lg:text-[10px]",
                                                                                children: "Sodium"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                                lineNumber: 157,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                        lineNumber: 154,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "2xl:w-[41.25px] 2xl:h-[58.79px] xl:w-[36.67px] xl:h-[59.03px] lg:w-[31.63px] lg:h-[52.11px]",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                src: "/Images/Fat.svg",
                                                                                alt: "Fat",
                                                                                width: 42,
                                                                                height: 42,
                                                                                className: "2xl:w-[42px] 2xl:h-[42px] xl:w-[37.33px] xl:h-[37.33px] lg:w-[32.2px] lg:h-[32.2px]"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                                lineNumber: 162,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                                className: "text-[#111827] geologica text-center font-normal leading-3eading-[150%] 2xl:text-[12px] xl:text-[10.67px]  lg:text-[10px]",
                                                                                children: "Fat"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                                lineNumber: 164,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                        lineNumber: 161,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                lineNumber: 133,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                lineNumber: 123,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Components/How its works/How its works.tsx",
                                        lineNumber: 101,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/Images/how-bg-3.png",
                                                    alt: "/Images/how-bg-3.png",
                                                    width: 279,
                                                    height: 518,
                                                    className: "2xl:w-[388px] 2xl:h-[655px] xl:w-[345px] xl:h-[582px] lg:w-[298px] lg:h-[548px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-0 left-0 z-10",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-[#FDCB26]  2xl:w-[243px] 2xl:h-[380px] xl:w-[216px] xl:h-[400px] lg:w-[187px] lg:h-[290px] 2xl:rounded-[18px] xl:rounded-[16px] lg:rounded-[14px] 2xl:mx-[72px] xl:mx-[64px] lg:mx-[55px] 2xl:mt-[60px] xl:mt-[12px] lg:mt-[35px]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: "/Images/how-3.png",
                                                                    alt: "how-3",
                                                                    width: 211,
                                                                    height: 0,
                                                                    className: " 2xl:w-[271px] 2xl:h-[430px] xl:w-[240.89px] xl:h-[400px]  lg:w-[209px] absolute z-10 top-0  left-[15%] "
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                    lineNumber: 193,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "2xl:w-[273px] 2xl:h-[58px] xl:w-[242.67px] xl:h-[51.56px] lg:w-[218px] lg:h-[46px] 2xl:rounded-[9px] xl:rounded-[8px] lg:rounded-[8px]  absolute z-20 left-[7%]  top-[66%]  bg-[#FFFFFF]",
                                                                    style: {
                                                                        boxShadow: "0px 4px 50px #0000001F"
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: "/Images/how-processing.svg",
                                                                        alt: "how-processing",
                                                                        width: 178.21,
                                                                        height: 0,
                                                                        className: "2xl:w-[237px] 2xl:h-[50px] xl:w-[210.89px] xl:h-[43.89px]  lg:w-[200px] lg:h-[41px] 2xl:mx-[18px] xl:mx-[16px] lg:mx-[12px] 2xl:2xl:my-[3px] xl:my-[3.56px] lg:my-[3px]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                        lineNumber: 201,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                    lineNumber: 197,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                            lineNumber: 192,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "2xl:w-[388px] 2xl:h-[148px]  xl:w-[345px] xl:h-[131px] lg:w-[288px] lg:h-[122px] border border-[#7D7C814D] absolute 2xl:top-[77.2%] xl:top-[77.3%] lg:top-[77.7%] z-20 rounded-b-[15px] bg-[#ffffff]   ",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "xl:w-[267px] 2xl:w-[300px] lg:w-[250px] 2xl:mx-4 xl:mx-4 lg:mx-3 lg:my-3 2xl:my-6 xl:my-6 ",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                className: "text-[#1DD673] geologica font-normal 2xl:text-[14px] xl:text-[14px] lg:text-[13px] leading-[100%]",
                                                                children: "Step 1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                lineNumber: 220,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                className: "text-[#1B1A1F] geologica font-bold 2xl:text-[28px] xl:text-[24px] lg:text-[24px] leading-[100%]  2xl:mt-[15px] xl:mt-[11px] lg:mt-[10px]",
                                                                children: "Scan"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                lineNumber: 222,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[#7D7C81] geologica font-light 2xl:w-[300px] xl:w-[266px] lg:w-[250px] 2xl:text-[18px] xl:text-[16px] lg:text-[15px] leading-[125%]  2xl:mt-[10px] xl:mt-[5px] lg:mt-[10px]",
                                                                children: "Use the app to scan food products with a barcode or live camera."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                lineNumber: 225,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                        lineNumber: 218,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Components/How its works/How its works.tsx",
                                            lineNumber: 184,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/How its works/How its works.tsx",
                                        lineNumber: 183,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Components/How its works/How its works.tsx",
                                lineNumber: 49,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Components/How its works/How its works.tsx",
                        lineNumber: 43,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/Components/How its works/How its works.tsx",
                    lineNumber: 41,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full md:py-[60px]  py-[40px] 2xl:hidden xl:hidden lg:hidden overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: " md:w-full w-[335px] mx-auto ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:w-[240px] w-[140px] mx-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-[#1B1A1F] font-bold geologica  md:text-[34px] text-[20px] leading-[130%] ",
                                    children: "How its works"
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/How its works/How its works.tsx",
                                    lineNumber: 254,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Components/How its works/How its works.tsx",
                                lineNumber: 253,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-[40px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: " md:w-full  w-[279px] mx-auto md:mx-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        ...settings,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:w-[345px]  w-[279px] ",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/Images/how-bg-1.png",
                                                            alt: "/Images/how-bg-1.png",
                                                            width: 279,
                                                            height: 518,
                                                            className: "md:w-[345px] md:h-[582px] h-[518px]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                            lineNumber: 265,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute top-0 left-0 z-10",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-[#1DD673] md:w-[217.78px] md:h-[360.89px] w-[190px] h-[315px]  md:rounded-[16px] rounded-[14px]  md:mx-[63.11px] mx-[43px] md:mt-[31.11px] mt-[45px]",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: "/Images/how-1.png",
                                                                    alt: "how-1",
                                                                    width: 211,
                                                                    height: 0,
                                                                    className: "md:w-[70.5%]   absolute z-10 md:top-[10%] top-[15%]  md:left-[15%] left-[13%]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                    lineNumber: 273,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                lineNumber: 269,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                            lineNumber: 267,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "md:mt-[414px] mt-[47vh]  md:w-[345px] w-[279px] border border-[#7D7C814D]  absolute top-[5%]  z-20 rounded-b-[20px] bg-[#ffffff]   ",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "md:w-[267px] w-[280px] mx-4  md:my-[24px] my-[15px] ",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                        className: "text-[#1DD673] geologica font-normal md:text-[14px] text-[12px]  leading-[100%]",
                                                                        children: "Step 1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                        lineNumber: 286,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                        className: "text-[#1B1A1F] geologica font-bold md:text-[24px] text-[20px] leading-[100%]  md:mt-[12px] mt-[11px]",
                                                                        children: "Scan"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                        lineNumber: 287,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[#7D7C81] geologica font-light md:text-[16px] text-[14px] leading-[125%] md:mt-[3px] mt-[4px] w-[234px] md:w-[268px]",
                                                                        children: "Use the app to scan food products with a barcode or live camera."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                        lineNumber: 290,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                lineNumber: 284,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                            lineNumber: 282,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                lineNumber: 263,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/Images/how-bg-2.png",
                                                        alt: "/Images/how-bg-2.png",
                                                        width: 279,
                                                        height: 518,
                                                        className: "md:w-[345px] md:h-[582px] h-[518px]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                        lineNumber: 304,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "  absolute top-[1px] left-[5%] z-20 rounded-t-[20px] md:w-[300px] w-[260px] bg-[#ffffff] ",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "md:w-[267px] w-[280px]   md:my-[24px] my-[15px] ",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                    className: "text-[#FF733D] geologica font-normal md:text-[14px] text-[12px]  leading-[100%]",
                                                                    children: "Step 2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                    lineNumber: 311,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                    className: "text-[#1B1A1F] geologica font-bold md:text-[24px] text-[20px] leading-[100%]  md:mt-[12px] mt-[11px]",
                                                                    children: "Analyse"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                    lineNumber: 312,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[#7D7C81] geologica font-light md:text-[16px] text-[14px] leading-[125%] md:mt-[3px] mt-[4px] w-[234px] md:w-[268px]",
                                                                    children: "Our AI processes the data and delivers a complete health analysis."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                    lineNumber: 315,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                            lineNumber: 309,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                        lineNumber: 307,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute z-10 md:top-[25%] top-[25%] left-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-[#FF733D] md:w-[217.78px] md:h-[360.89px]  w-[190px] h-[315px]  md:rounded-[16px] rounded-[14px] mt-[7%] md:mt-[4%] md:mx-[63.11px] mx-[43px]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: "/Images/how-2.png",
                                                                        alt: "how-1",
                                                                        width: 211,
                                                                        height: 0,
                                                                        className: "md:w-[70.5%]   absolute z-10 md:top-[6%] top-[8%]  md:left-[15%] left-[13%]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                        lineNumber: 330,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "md:w-[252.44px] md:h-[70.22px] w-[217px] h-[60.36px] bg-[#FFFFFF] md:rounded-[8px] rounded-[6.68px] flex  md:gap-[22.22px] gap-[19.1px]  top-[96%] left-[8%] absolute z-20 md:px-[16px] px-[13.75px] md:py-[5.33px] py-[8px]",
                                                                        style: {
                                                                            boxShadow: "0px 0px 50px #0000001F"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "md:w-[36.67px] md:h-[59.03px] w-[31.52px] h-[50.99px]",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                        src: "/Images/carbs.svg",
                                                                                        alt: "carbs",
                                                                                        width: 32.09,
                                                                                        height: 0,
                                                                                        className: "md:w-[37.33px] md:h-[37.33px]"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                                        lineNumber: 339,
                                                                                        columnNumber: 57
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                                        className: "text-[#111827] geologica text-center font-normal leading-[150%] md:text-[10.67px] text-[9.17px]  md:mt-[5.7px] mt-[4.9px]",
                                                                                        children: "Carbs"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                                        lineNumber: 341,
                                                                                        columnNumber: 57
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                                lineNumber: 338,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "md:w-[36.67px] md:h-[59.03px] w-[31.52px] h-[50.99px]",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                        src: "/Images/Protein.svg",
                                                                                        alt: "carbs",
                                                                                        width: 32.09,
                                                                                        height: 0,
                                                                                        className: "md:w-[37.33px] md:h-[37.33px]"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                                        lineNumber: 346,
                                                                                        columnNumber: 57
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                                        className: "text-[#111827] geologica text-center font-normal leading-[150%] md:text-[10.67px] text-[9.17px]  md:mt-[5.7px] mt-[4.9px]",
                                                                                        children: "Protein"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                                        lineNumber: 348,
                                                                                        columnNumber: 57
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                                lineNumber: 345,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "md:w-[36.67px] md:h-[59.03px] w-[31.52px] h-[50.99px]",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                        src: "/Images/Sodium.svg",
                                                                                        alt: "carbs",
                                                                                        width: 32.09,
                                                                                        height: 0,
                                                                                        className: "md:w-[37.33px] md:h-[37.33px]"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                                        lineNumber: 353,
                                                                                        columnNumber: 57
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                                        className: "text-[#111827] geologica text-center font-normal leading-[150%] md:text-[10.67px] text-[9.17px]  md:mt-[5.7px] mt-[4.9px]",
                                                                                        children: "Sodium"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                                        lineNumber: 355,
                                                                                        columnNumber: 57
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                                lineNumber: 352,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "md:w-[36.67px] md:h-[59.03px] w-[31.52px] h-[50.99px]",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                        src: "/Images/Fat.svg",
                                                                                        alt: "carbs",
                                                                                        width: 32.09,
                                                                                        height: 0,
                                                                                        className: "md:w-[37.33px] md:h-[37.33px]"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                                        lineNumber: 360,
                                                                                        columnNumber: 57
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                                        className: "text-[#111827] geologica text-center font-normal leading-[150%] md:text-[10.67px] text-[9.17px]  md:mt-[5.7px] mt-[4.9px]",
                                                                                        children: "Fat"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                                        lineNumber: 362,
                                                                                        columnNumber: 57
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                                lineNumber: 359,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                        lineNumber: 333,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                lineNumber: 328,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                            lineNumber: 325,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                        lineNumber: 324,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                lineNumber: 303,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:w-[345px] md:h-[582px] w-[279px] h-[518px]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/Images/how-bg-3.png",
                                                            alt: "/Images/how-bg-3.png",
                                                            width: 279,
                                                            height: 518,
                                                            className: "md:w-[345px] md:h-[582px] h-[518px] "
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                            lineNumber: 389,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute top-0 left-0 z-10",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-[#FDCB26] md:w-[217.78px] w-[190px] h-[315px]  md:rounded-[16px] rounded-[14px]  md:mx-[63.11px] mx-[44px] md:mt-[6.5vh] mt-[1vh]",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            src: "/Images/how-3.png",
                                                                            alt: "how-3",
                                                                            width: 211,
                                                                            height: 0,
                                                                            className: "md:w-[70.5%]   absolute z-10 top-0  md:left-[15%] left-[13%]"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                            lineNumber: 398,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: " md:w-[242.67px] md:h-[51.56px] w-[205.03px] md:rounded-[8px] rounded-[6.67px]  absolute z-20 left-[7%]  md:top-[65%] top-[67%] bg-[#FFFFFF]",
                                                                            style: {
                                                                                boxShadow: "0px 4px 50px #0000001F"
                                                                            },
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                src: "/Images/how-processing.svg",
                                                                                alt: "how-processing",
                                                                                width: 178.21,
                                                                                height: 0,
                                                                                className: "md:w-[210.89px]   md:mx-[16px] md:my-[3.56px] mx-[13.52px] my-[3px]"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                                lineNumber: 405,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                            lineNumber: 401,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                    lineNumber: 397,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                lineNumber: 393,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                            lineNumber: 391,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: " md:mt-[414px] mt-[47vh]  md:w-[345px] w-[279px] border border-[#7D7C814D]  absolute top-[5%]  z-20 rounded-b-[20px] bg-[#ffffff]  ",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "md:w-[267px] w-[280px] mx-4  md:my-[24px] my-[15px] ",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                        className: "text-[#FDCB26] geologica font-normal md:text-[14px] text-[12px]  leading-[100%]",
                                                                        children: "Step 3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                        lineNumber: 421,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                        className: "text-[#1B1A1F] geologica font-bold md:text-[24px] text-[20px] leading-[100%]  md:mt-[12px] mt-[11px]",
                                                                        children: "Instant Results"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                        lineNumber: 422,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[#7D7C81] geologica font-light md:text-[16px] text-[14px] leading-[125%] md:mt-[3px] mt-[4px] w-[234px] md:w-[268px]",
                                                                        children: "Instantly see a health report with nutrient and processing details."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                        lineNumber: 425,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                                lineNumber: 419,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                            lineNumber: 417,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                    lineNumber: 388,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/Components/How its works/How its works.tsx",
                                                lineNumber: 387,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Components/How its works/How its works.tsx",
                                        lineNumber: 262,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/How its works/How its works.tsx",
                                    lineNumber: 260,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Components/How its works/How its works.tsx",
                                lineNumber: 259,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Components/How its works/How its works.tsx",
                        lineNumber: 252,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/Components/How its works/How its works.tsx",
                    lineNumber: 248,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Components/How its works/How its works.tsx",
            lineNumber: 39,
            columnNumber: 13
        }, this)
    }, void 0, false);
}
}}),
"[project]/app/Components/Frequently/Frequently.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Frequently)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const filteredFAQs = [
    {
        id: '1',
        title: 'How do I integrate this solution into my app?',
        description: 'Most orders are processed and sent out within 24–48 hours after inventory arrives.'
    },
    {
        id: '2',
        title: 'Is technical knowledge required for integration?',
        description: 'Yes, we offer careful packaging and handling for delicate or special care products.'
    },
    {
        id: '3',
        title: 'Can I customize the features to match my apps design?',
        description: 'Absolutely, we provide tracking and inventory updates so you’re always in the loop.'
    },
    {
        id: '4',
        title: 'What platforms are supported?',
        description: 'Absolutely, we provide tracking and inventory updates so you’re always in the loop.'
    },
    {
        id: '5',
        title: 'How long does it take to integrate?',
        description: 'Absolutely, we provide tracking and inventory updates so you’re always in the loop.'
    }
];
const Card = ({ item, isActive, onClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClick,
        className: "cursor-pointer w-full h-auto bg-white px-[35px] py-[22px] rounded-[15px] transition-all duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "2xl:text-[20px] xl:text-[18px] lg:text-[17px] md:text-[17px] text-[16px] font-semibold text-[#1B1A1F]",
                        children: item.title
                    }, void 0, false, {
                        fileName: "[project]/app/Components/Frequently/Frequently.tsx",
                        lineNumber: 54,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                        animate: {
                            rotate: isActive ? 180 : 0
                        },
                        transition: {
                            duration: 0.15
                        },
                        className: "text-xl text-[#1B1A1F]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoIosArrowDown"], {}, void 0, false, {
                            fileName: "[project]/app/Components/Frequently/Frequently.tsx",
                            lineNumber: 63,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Components/Frequently/Frequently.tsx",
                        lineNumber: 58,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Components/Frequently/Frequently.tsx",
                lineNumber: 53,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        height: 0
                    },
                    animate: {
                        opacity: 1,
                        height: 'auto'
                    },
                    exit: {
                        opacity: 0,
                        height: 0
                    },
                    transition: {
                        duration: 0.15
                    },
                    className: "overflow-hidden 2xl:mt-[10px] xl:mt-[15px] lg:mt-[15px] md:mt-[15px] mt-[15px] 2xl:text-[18px] xl:text-[17px] lg:text-[16px] md:text-[16px] text-[14px] text-[#1B1A1F]",
                    children: item.description
                }, void 0, false, {
                    fileName: "[project]/app/Components/Frequently/Frequently.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/Components/Frequently/Frequently.tsx",
                lineNumber: 67,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/Components/Frequently/Frequently.tsx",
        lineNumber: 49,
        columnNumber: 3
    }, this);
function Frequently() {
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleClick = (id)=>{
        setActiveId((prev)=>prev === id ? null : id);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#F7F7F7] w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "2xl:w-[1440px] xl:w-[1280px] lg:w-[1024px] md:w-[768px] w-[100%] h-auto md:h-[720px]  2xl:h-[800px] xl:h-[800px] lg:h-[800px] 2xl:py-[75px] xl:py-[95px] lg:py-[100px] md:py-[50px] py-[40px] mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "2xl:w-[1350px] xl:w-[1150px] lg:w-[904px] md:w-[668px] w-[90%] mx-auto ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "2xl:w-[308px] 2xl:h-[54px] xl:w-[308px] xl:h-[54px] w-[265px] h-[46px] lg:w-[276px] lg:h-[54px] md:w-[276px] md:h-[54px] bg-[#ffffff]  2xl:rounded-[50px] xl:rounded-[50px] lg:rounded-[50px] md:rounded-[50px] rounded-[50px] flex 2xl:gap-[11px] xl:gap-[11px] lg:gap-[11px] md:gap-[11px] gap-[8.21px] mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "2xl:w-[39px] 2xl:h-[39px] xl:w-[39px] xl:h-[39px] lg:w-[39px] lg:h-[39px]  md:w-[39px] md:h-[39px] w-[30px] h-[30px] bg-[#C7FFE1] rounded-full 2xl:ml-[8px] xl:ml-[8px] 2xl:my-[8px] xl:my-[8px] md:my-[8px] my-[8px] lg:my-[8px] lg:ml-[8px] md:ml-[8px] ml-[8px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Images/Frequently-icon.svg",
                                        alt: "icon",
                                        width: 20.53,
                                        height: 20.53,
                                        className: "2xl:w-[26px]  xl:w-[26px]  lg:w-[26px] md:w-[26px] md:h-[26px] 2xl:my-[6px] xl:my-[6px] 2xl:mx-[6px] xl:mx-[6px] md:mx-[7px] md:my-[6px] lg:mx-[7px] lg:my-[6px] mx-[5.53px] my-[4.74px]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Frequently/Frequently.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Frequently/Frequently.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: " 2xl:text-[18px] xl:text-[18px] lg:text-[16px] md:text-[16px] text-[16px] 2xl:my-[18px] xl:my-[18px] lg:my-[16px] md:my-[17px] my-[13px] text-[#1B1A1F] font-normal geologica leading-[100%]",
                                    children: "Frequently asked question"
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Frequently/Frequently.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Components/Frequently/Frequently.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "2xl:text-[40px] xl:text-[36px] lg:text-[36px] md:text-[34px] text-[20px] 2xl:mt-[40px] xl:mt-[30px] lg:mt-[30px] md:mt-[30px] mt-[20px] text-[#1B1A1F] geologica font-bold w-[50%] lg:w-full md:w-full 2xl:w-full xl:w-full mx-auto leading-[130%] text-center ",
                            children: "Quick Help for Easy Integration"
                        }, void 0, false, {
                            fileName: "[project]/app/Components/Frequently/Frequently.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "2xl:w-[866px] xl:w-[866px] lg:w-[668px] md:w-[668px] w-[90%] mx-auto 2xl:mt-[65px] xl:mt-[70px] lg:mt-[53px] md:mt-[55px] mt-[30px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col 2xl:gap-[15px] xl:gap-[15px] lg:gap-[15px] md:gap-[15px] gap-[15px]",
                                children: filteredFAQs.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                        item: item,
                                        isActive: activeId === item.id,
                                        onClick: ()=>handleClick(item.id)
                                    }, item.id, false, {
                                        fileName: "[project]/app/Components/Frequently/Frequently.tsx",
                                        lineNumber: 134,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Frequently/Frequently.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/Components/Frequently/Frequently.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Components/Frequently/Frequently.tsx",
                    lineNumber: 97,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/Components/Frequently/Frequently.tsx",
                lineNumber: 95,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/Components/Frequently/Frequently.tsx",
            lineNumber: 94,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
}}),
"[project]/app/Components/Our Technology/Our Technology.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>OurTechnology)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function OurTechnology() {
    // Create separate animation controls for each chip
    const controls = Array.from({
        length: 11
    }, ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnimation"])());
    // Reference to the section to observe
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Detect if the section is in view
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "0px 0px -100px 0px"
    });
    // State to store the current screen size, typed as ScreenSize
    const [screenSize, setScreenSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('mobile');
    // Detect screen size on mount and on resize
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleResize = ()=>{
            const width = window.innerWidth;
            if (width >= 1440) {
                setScreenSize('2xl');
            } else if (width >= 1280) {
                setScreenSize('xl');
            } else if (width >= 1024) {
                setScreenSize('lg');
            } else if (width >= 768) {
                setScreenSize('md');
            } else {
                setScreenSize('mobile');
            }
        };
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return ()=>window.removeEventListener('resize', handleResize);
    }, []);
    // Define final top positions for each chip based on screen size
    const finalTopPositions = {
        '2xl': [
            '62.44%',
            '68.78%',
            '84.65%',
            '79.36%',
            '87.29%',
            '71.43%',
            '76.72%',
            '58.22%',
            '82.53%',
            '58.22%',
            '83.06%'
        ],
        xl: [
            '68.94%',
            '71.90%',
            '86.69%',
            '78.24%',
            '87.53%',
            '58.38%',
            '71.90%',
            '85.00%',
            '59.22%',
            '65.56%',
            '82.46%'
        ],
        lg: [
            '88.17%',
            '83.46%',
            '57.00%',
            '78.70%',
            '80.67%',
            '68.84%',
            '73.97%',
            '63.71%',
            '58.97%',
            '60.94%',
            '72.78%'
        ],
        md: [
            '87.48%',
            '87.48%',
            '59.33%',
            '78.82%',
            '76.65%',
            '89.65%',
            '76.65%',
            '65.83%',
            '61.50%',
            '61.50%',
            '76.65%'
        ],
        mobile: [
            '90.77%',
            '62.56%',
            '40.64%',
            '81.18%',
            '56.92%',
            '65.38%',
            '71.03%',
            '54.10%',
            '49.02%',
            '45.64%',
            '81.74%'
        ]
    };
    // Define final rotation values for each chip based on screen size
    const finalRotations = {
        '2xl': [
            -25,
            -7,
            -3,
            -15,
            0,
            0,
            -22,
            20,
            -16,
            30,
            -17
        ],
        xl: [
            -25,
            -12,
            0,
            -23,
            0,
            14,
            -16,
            18,
            9,
            16,
            21
        ],
        lg: [
            0,
            -9,
            -9,
            17,
            -20,
            5,
            -36,
            0,
            -27,
            13,
            9
        ],
        md: [
            0,
            -9,
            -20,
            -22,
            -16,
            -15,
            -36,
            0,
            -28,
            14,
            9
        ],
        mobile: [
            0,
            -13,
            -8,
            -19,
            -14,
            0,
            5,
            -23,
            -15,
            9,
            -22
        ]
    };
    // Trigger animations sequentially when the section comes into view
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isInView) {
            controls.forEach((control, index)=>{
                control.start({
                    translateY: 0,
                    opacity: 1,
                    top: [
                        '0%',
                        finalTopPositions[screenSize][index]
                    ],
                    rotate: [
                        0,
                        finalRotations[screenSize][index]
                    ],
                    transition: {
                        top: {
                            duration: 0.8,
                            ease: 'easeOut',
                            delay: index * 0.15
                        },
                        rotate: {
                            duration: 0.8,
                            ease: 'easeOut',
                            delay: index * 0.15
                        },
                        translateY: {
                            type: 'spring',
                            stiffness: 80,
                            damping: 10,
                            delay: index * 0.15
                        },
                        opacity: {
                            duration: 0.5,
                            delay: index * 0.15
                        }
                    }
                });
            });
        }
    }, [
        isInView,
        controls,
        screenSize
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "2xl:w-[1440px] xl:w-[1280px] lg:w-[1024px] md:w-[768px] w-[375px] 2xl:py-[103px] xl:py-[100px] lg:py-[60px] md:py-[60px] py-[65px] mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: ref,
                    className: "2xl:w-[1350px] xl:w-[1150px] lg:w-[904px] md:w-[668px] 2xl:h-[468px] w-[325px] xl:h-[536px] lg:h-[479px] md:h-[564px] h-[702px] 2xl:rounded-[40px] xl:rounded-[40px] lg:rounded-[30px] md:rounded-[20px] rounded-[20px] bg-[#1B1A1F] relative mx-auto overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "2xl:w-[604px] xl:w-[475px] lg:w-[420px] md:w-[420px] w-[300px] 2xl:pt-[62px] xl:pt-[50px] lg:pt-[50px] md:pt-[50px] pt-[60px] mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-[#1DD673] geologica text-center font-normal 2xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[18px] text-[16px] leading-[130%] tracking-[-2%]",
                                    children: "Ready to integrate?"
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "geologica text-center font-bold text-[#FFFFFF] 2xl:text-[40px] xl:text-[36px] lg:text-[34px] md:text-[34px] text-[24px] leading-[130%] tracking-[-2%] 2xl:mt-[10px] xl:mt-[15px] lg:mt-[26px] md:mt-[26px] mt-[20px]",
                                    children: "Supercharge Your App with Our Technology"
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                    lineNumber: 120,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "2xl:w-[249px] 2xl:h-[61px] xl:w-[183px] xl:h-[55px] w-[141px] h-[47px] lg:w-[160px] lg:h-[54px] md:w-[160px] md:h-[54px] 2xl:mt-[25px] xl:mt-[20px] lg:mt-[29px] md:mt-[29px] mt-[30px] 2xl:rounded-[15px] xl:rounded-[12px] lg:rounded-[10px] md:rounded-[10px] rounded-[10px] 2xl:text-[15px] xl:text-[15px] lg:text-[18px] md:text-[18px] text-[15px] bg-[#FFFFFF] text-[#1B1A1F] leading-[100%] font-medium geologica",
                                        children: "Get free trial"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                        lineNumber: 124,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                            lineNumber: 116,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "2xl:w-[1117.82px] xl:w-[1070.58px] lg:w-[814px] md:w-[644.83px] w-[304px] h-full  2xl:left-[8%] xl:left-[3.5%] lg:left-[5%] md:left-[2%] left-[3%] top-0 absolute right-0 flex z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        translateY: -100,
                                        opacity: 0,
                                        top: '0%',
                                        rotate: 0
                                    },
                                    animate: controls[0],
                                    className: "absolute 2xl:top-[33%] xl:top-[33%] lg:top-[79%] md:top-[75%] top-[90%]  2xl:left-0 xl:left-0 lg:left-[33%] md:left-[34%] left-[15%] transform",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Images/Vegan.svg",
                                        alt: "Vegan",
                                        width: 209,
                                        height: 54,
                                        className: "2xl:w-[276.74px] xl:w-[276.74px] lg:w-[233.03px] md:w-[233px] w-[209px]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                        lineNumber: 142,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        translateY: -100,
                                        opacity: 0,
                                        top: '0%',
                                        rotate: 0
                                    },
                                    animate: controls[1],
                                    className: "absolute 2xl:top-[45%] xl:top-[40%] lg:top-[67%] md:top-[75%] top-[40%]  2xl:left-[15%] xl:left-[20%] lg:left-[9%] md:left-[8%] left-0 transform",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Images/yoga.svg",
                                        alt: "yoga",
                                        width: 198.5,
                                        height: 54,
                                        className: "2xl:w-[198.5px] xl:w-[198.5px] lg:w-[162.9px] md:w-[163px] w-[147px]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                        lineNumber: 158,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                    lineNumber: 152,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        translateY: -100,
                                        opacity: 0,
                                        top: '0%',
                                        rotate: 0
                                    },
                                    animate: controls[2],
                                    className: "absolute 2xl:top-[75%] xl:top-[75%] lg:top-0 md:top-[10%]  2xl:left-[5%] xl:left-[7%] lg:left-[5%] md:left-[5%] left-[2%] transform",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Images/sports.svg",
                                        alt: "sports",
                                        width: 182,
                                        height: 54,
                                        className: "2xl:w-[182px] xl:w-[182px] lg:w-[141.95px] md:w-[142px] w-[127px]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                        lineNumber: 174,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                    lineNumber: 168,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        translateY: -100,
                                        opacity: 0,
                                        top: '0%',
                                        rotate: 0
                                    },
                                    animate: controls[3],
                                    className: "absolute 2xl:top-[65%] xl:top-[55%] lg:top-[55%] md:top-[55%] top-[73%]  2xl:left-[23%] xl:left-[29%] lg:left-[50%] md:left-[70%] left-[43%] transform",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Images/organic.svg",
                                        alt: "organic",
                                        width: 246.11,
                                        height: 54,
                                        className: "2xl:w-[246.11px] xl:w-[246.11px] lg:w-[196px] md:w-[196px] w-[175px]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                        lineNumber: 190,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                    lineNumber: 184,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        translateY: -100,
                                        opacity: 0,
                                        top: '0%',
                                        rotate: 0
                                    },
                                    animate: controls[4],
                                    className: "absolute 2xl:top-[80%] xl:top-[77%] lg:top-[60%] md:top-[50%] top-[30%]  2xl:left-[39%] xl:left-[43%] lg:left-[78%] md:left-[55%] left-[50%]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Images/fitnes.svg",
                                        alt: "fitnes",
                                        width: 200,
                                        height: 0,
                                        className: "2xl:w-[200px] xl:w-[200px] lg:w-[145px] md:w-[145px] w-[140px]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                        lineNumber: 206,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                    lineNumber: 200,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        translateY: -100,
                                        opacity: 0,
                                        top: '0%',
                                        rotate: 0
                                    },
                                    animate: controls[5],
                                    className: "absolute 2xl:top-[50%] xl:top-[8%] lg:top-[30%] md:top-[80%] top-[45%]  2xl:left-[47%] xl:left-[30%] lg:left-[66%] md:left-[78%] left-[60%]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Images/Dietitians.svg",
                                        alt: "Dietitians",
                                        width: 151.56,
                                        height: 0,
                                        className: "2xl:w-[151.56px] xl:w-[151.56px] lg:w-[121px] md:w-[121px] w-[117px]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                        lineNumber: 222,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                    lineNumber: 216,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        translateY: -100,
                                        opacity: 0,
                                        top: '0%',
                                        rotate: 0
                                    },
                                    animate: controls[6],
                                    className: "absolute 2xl:top-[60%] xl:top-[40%] lg:top-[43%] md:top-[50%] top-[55%]  2xl:left-[57%] xl:left-[52%] lg:left-0 md:left-0 left-[15%] transform",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Images/Gluten free brands.svg",
                                        alt: "Gluten free brands",
                                        width: 225.42,
                                        height: 54,
                                        className: "2xl:w-[224.42px] xl:w-[224.42px] lg:w-[179px] md:w-[179px] w-[179px]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                        lineNumber: 238,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                    lineNumber: 232,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        translateY: -100,
                                        opacity: 0,
                                        top: '0%',
                                        rotate: 0
                                    },
                                    animate: controls[7],
                                    className: "absolute 2xl:top-[25%] xl:top-[71%] lg:top-[17%] md:top-[25%] top-[25%]  2xl:left-[70%] xl:left-[65%] md:left-[40%] lg:left-[45%] left-[8%] transform",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Images/TeleNutrition .svg",
                                        alt: "TeleNutrition",
                                        width: 192.95,
                                        height: 54,
                                        className: "2xl:w-[192.95px] xl:w-[192.95px] lg:w-[145px] md:w-[145px] w-[132px]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                        lineNumber: 254,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                    lineNumber: 248,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        translateY: -100,
                                        opacity: 0,
                                        top: '0%',
                                        rotate: 0
                                    },
                                    animate: controls[8],
                                    className: "absolute 2xl:top-[71%] xl:top-[10%] lg:top-[5%] md:top-[15%] top-[16%]  2xl:left-[70%] xl:left-[48%] lg:left-[23%] md:left-[27%] left-0 transform",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Images/gyms.svg",
                                        alt: "gym",
                                        width: 139,
                                        height: 54,
                                        className: "2xl:w-[139px] xl:w-[139px] lg:w-[101px] md:w-[101px] w-[95px]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                        lineNumber: 270,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                    lineNumber: 264,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        translateY: -100,
                                        opacity: 0,
                                        top: '0%',
                                        rotate: 0
                                    },
                                    animate: controls[9],
                                    className: "absolute 2xl:top-[25%] xl:top-[25%] lg:top-[10%] md:top-[15%] top-[10%]  2xl:left-[81%] xl:left-[75%] lg:left-[75%] md:left-[65%] left-[40%] transform",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Images/Modern Paleo Brands.svg",
                                        alt: "Modern Paleo Brands",
                                        width: 239,
                                        height: 54,
                                        className: "2xl:w-[239px] xl:w-[239px] lg:w-[202px] md:w-[202px] w-[179px]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                        lineNumber: 286,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                    lineNumber: 280,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        translateY: -100,
                                        opacity: 0,
                                        top: '0%',
                                        rotate: 0
                                    },
                                    animate: controls[10],
                                    className: "absolute 2xl:top-[72%] xl:top-[65%] lg:top-[40%] md:top-[50%] top-[74%]  2xl:left-[82%] xl:left-[81%] lg:left-[27%] md:left-[28%] left-0 transform",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Images/Health Coaches.svg",
                                        alt: "gym owners icon",
                                        width: 200,
                                        height: 54,
                                        className: "2xl:w-[200px] xl:w-[200px] lg:w-[161.97px] md:w-[162px] w-[142px]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                        lineNumber: 302,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                                    lineNumber: 296,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                            lineNumber: 131,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                    lineNumber: 112,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
                lineNumber: 111,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/Components/Our Technology/Our Technology.tsx",
            lineNumber: 110,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__813b1a8b._.js.map