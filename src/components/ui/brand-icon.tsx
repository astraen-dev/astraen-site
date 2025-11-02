import {cn} from "@/lib/utils";
import React from "react";

interface BrandIconProps extends React.SVGProps<SVGSVGElement> {
    path: string;
}

export const BrandIcon = ({path, className, ...props}: BrandIconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={cn("h-5 w-5", className)}
            {...props}
        >
            <path d={path}/>
        </svg>
    );
};