/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LoginOverridesProps = {
    Login?: PrimitiveOverrideProps<ViewProps>;
    Rectangle?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 14"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 13"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 12"?: PrimitiveOverrideProps<IconProps>;
    Register?: PrimitiveOverrideProps<ViewProps>;
    Login34199?: PrimitiveOverrideProps<TextProps>;
    Component341100?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2341101"?: PrimitiveOverrideProps<ViewProps>;
    "Email address"?: PrimitiveOverrideProps<TextProps>;
    Component341103?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2341104"?: PrimitiveOverrideProps<ViewProps>;
    Password?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2341107"?: PrimitiveOverrideProps<ViewProps>;
    next?: PrimitiveOverrideProps<TextProps>;
    Union?: PrimitiveOverrideProps<IconProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Status Bar"?: PrimitiveOverrideProps<ViewProps>;
    UI?: PrimitiveOverrideProps<ViewProps>;
    Battery?: PrimitiveOverrideProps<ViewProps>;
    Border?: PrimitiveOverrideProps<ViewProps>;
    Cap?: PrimitiveOverrideProps<IconProps>;
    Capacity?: PrimitiveOverrideProps<ViewProps>;
    Wifi341117?: PrimitiveOverrideProps<ViewProps>;
    Wifi341118?: PrimitiveOverrideProps<IconProps>;
    "Wifi-path341119"?: PrimitiveOverrideProps<IconProps>;
    "Wifi-path341120"?: PrimitiveOverrideProps<IconProps>;
    "Wifi-path341121"?: PrimitiveOverrideProps<IconProps>;
    Cell341122?: PrimitiveOverrideProps<ViewProps>;
    Cell341123?: PrimitiveOverrideProps<IconProps>;
    "Cellular_Connection-path341124"?: PrimitiveOverrideProps<IconProps>;
    "Cellular_Connection-path341125"?: PrimitiveOverrideProps<IconProps>;
    "Cellular_Connection-path341126"?: PrimitiveOverrideProps<IconProps>;
    "Cellular_Connection-path341127"?: PrimitiveOverrideProps<IconProps>;
    Time341128?: PrimitiveOverrideProps<ViewProps>;
    Time341129?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type LoginProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: LoginOverridesProps | undefined | null;
}>;
export default function Login(props: LoginProps): React.ReactElement;
