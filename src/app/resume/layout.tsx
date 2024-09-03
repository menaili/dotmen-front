export default function ResumeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
         <>
         <div className="w-full h-[53px] bg-[#395A86] fixed z-10 top-0 flex items-center shadow-md">

         </div>
         {children}
         </>
    )
}