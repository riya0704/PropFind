"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { Loader2, Mail, Eye, EyeOff } from 'lucide-react';

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().email("Invalid email address."),
  password: z.string().min(1, "Password is required."),
  rememberMe: z.boolean().default(false).optional(),
});

export type LoginFormInputs = z.infer<typeof formSchema>;

const AppleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="32" height="38" viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g clipPath="url(#clip0_18_75)">
        <path d="M30.5986 13.0222C28.0467 14.572 26.4704 17.2288 26.4704 20.1808C26.4704 23.5019 28.497 26.5277 31.5744 27.7823C30.9739 29.7012 30.0732 31.4724 28.9474 33.096C27.2961 35.3838 25.5697 37.7455 23.0178 37.7455C20.4658 37.7455 19.7152 36.2695 16.7129 36.2695C13.7856 36.2695 12.7348 37.8193 10.333 37.8193C7.9311 37.8193 6.27982 35.679 4.40337 33.0222C1.92645 29.3322 0.500351 25.0517 0.425293 20.5498C0.425293 13.2436 5.22901 9.3321 10.0327 9.3321C12.5847 9.3321 14.6863 10.9557 16.2625 10.9557C17.7637 10.9557 20.1656 9.2583 23.0178 9.2583C26.0201 9.1845 28.8723 10.5867 30.5986 13.0222ZM21.6667 6.15866C22.9427 4.68264 23.6182 2.83762 23.6933 0.918796C23.6933 0.697393 23.6933 0.402189 23.6182 0.180786C21.4415 0.402189 19.415 1.4354 17.9889 3.05902C16.7129 4.46124 15.9623 6.23246 15.8873 8.15129C15.8873 8.37269 15.8873 8.59409 15.9623 8.8155C16.1124 8.8155 16.3376 8.8893 16.4877 8.8893C18.5143 8.7417 20.3907 7.70848 21.6667 6.15866Z" fill="black"/>
        </g>
        <defs>
        <clipPath id="clip0_18_75">
        <rect width="31.1491" height="37.6385" fill="white" transform="translate(0.425293 0.180786)"/>
        </clipPath>
        </defs>
    </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g clipPath="url(#clip0_18_70)">
        <path d="M37 19C37 8.50738 28.7165 0 18.5 0C8.2835 0 0 8.50738 0 19C0 28.4826 6.76417 36.3434 15.6096 37.7702V24.4935H10.9111V19H15.6096V14.8131C15.6096 10.0518 18.3725 7.41991 22.5975 7.41991C24.6216 7.41991 26.7393 7.79131 26.7393 7.79131V12.4672H24.4056C22.1084 12.4672 21.3904 13.9314 21.3904 15.4357V19H26.5207L25.7012 24.4935H21.3904V37.7702C30.2358 36.3461 37 28.4853 37 19Z" fill="#1977F3"/>
        <path d="M25.7012 24.4935L26.5208 19H21.3904V15.4357C21.3904 13.9341 22.1058 12.4672 24.4056 12.4672H26.7393V7.79132C26.7393 7.79132 24.6216 7.41992 22.5975 7.41992C18.3725 7.41992 15.6096 10.0491 15.6096 14.8131V19H10.9111V24.4935H15.6096V37.7702C16.5514 37.9225 17.5166 38 18.5 38C19.4834 38 20.4486 37.9199 21.3904 37.7702V24.4935H25.7012Z" fill="#FEFEFE"/>
        </g>
        <defs>
        <clipPath id="clip0_18_70">
        <rect width="37" height="38" fill="white"/>
        </clipPath>
        </defs>
    </svg>
);

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="32" height="34" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <mask id="mask0_18_57" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="34">
        <path d="M31.3873 14.0183H16.334V20.1973H24.9837C24.8447 21.0718 24.5324 21.932 24.0752 22.7164C23.5514 23.6151 22.9038 24.2993 22.24 24.8204C20.2516 26.3812 17.9335 26.7003 16.3235 26.7003C12.2566 26.7003 8.78172 24.0077 7.43651 20.349C7.38222 20.2162 7.34617 20.079 7.30228 19.9435C7.00502 19.0123 6.8426 18.026 6.8426 17.001C6.8426 15.9342 7.01848 14.913 7.33917 13.9485C8.60412 10.1447 12.1574 7.30361 16.3264 7.30361C17.165 7.30361 17.9725 7.40587 18.7383 7.60981C20.4885 8.0759 21.7264 8.99387 22.485 9.71998L27.0621 5.12821C24.2779 2.51313 20.6483 0.928528 16.3188 0.928528C12.8577 0.928452 9.66221 2.03315 7.04362 3.90012C4.92002 5.41418 3.17837 7.44132 2.00297 9.79562C0.909681 11.9785 0.311035 14.3976 0.311035 16.9986C0.311035 19.5997 0.910596 22.0439 2.00389 24.2066V24.2212C3.15868 26.5172 4.84738 28.4941 6.89981 30.0013C8.69283 31.3179 11.9079 33.0714 16.3188 33.0714C18.8555 33.0714 21.1036 32.6029 23.0863 31.7249C24.5165 31.0916 25.7838 30.2655 26.9311 29.2038C28.4471 27.8009 29.6344 26.0658 30.4447 24.0694C31.2551 22.073 31.6886 19.8154 31.6886 17.3678C31.6886 16.228 31.5768 15.0703 31.3873 14.0182V14.0183Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_18_57)">
        <g filter="url(#filter0_f_18_57)">
        <path d="M0.0800781 17.1077C0.0967168 19.6677 0.808822 22.309 1.88671 24.4413V24.456C2.66554 26.0045 3.72997 27.2276 4.94234 28.4396L12.2648 25.7027C10.8794 24.9818 10.668 24.54 9.67493 23.734C8.6601 22.6858 7.90373 21.4823 7.4327 20.0712H7.41372L7.4327 20.0566C7.12281 19.1247 7.09225 18.1356 7.08081 17.1077H0.0800781Z" fill="url(#paint0_radial_18_57)"/>
        </g>
        <g filter="url(#filter1_f_18_57)">
        <path d="M16.3327 0.811707C15.609 3.41634 15.8857 5.94813 16.3327 7.42124C17.1685 7.42188 17.9736 7.52393 18.737 7.72724C20.4871 8.19333 21.7249 9.11133 22.4835 9.83744L27.1778 5.12835C24.3969 2.51639 21.0502 0.815822 16.3327 0.811707Z" fill="url(#paint1_radial_18_57)"/>
        </g>
        <g filter="url(#filter2_f_18_57)">
        <path d="M16.3176 0.790955C12.7676 0.790876 9.49006 1.92393 6.80425 3.83884C5.80701 4.54984 4.89186 5.37117 4.07697 6.28451C3.8635 8.33611 5.67503 10.8577 9.26244 10.8369C11.003 8.76278 13.5773 7.42086 16.4425 7.42086C16.4451 7.42086 16.4477 7.42108 16.4503 7.42109L16.3333 0.791424C16.328 0.79142 16.3229 0.790955 16.3176 0.790955Z" fill="url(#paint2_radial_18_57)"/>
        </g>
        <g filter="url(#filter3_f_18_57)">
        <path d="M28.0355 17.85L24.8669 20.0799C24.7279 20.9544 24.4154 21.8146 23.9582 22.599C23.4344 23.4977 22.7868 24.182 22.123 24.703C20.1388 26.2606 17.8267 26.5813 16.2172 26.5826C14.5536 29.4851 14.262 30.9389 16.3342 33.2815C18.8984 33.2796 21.1717 32.8054 23.1769 31.9175C24.6263 31.2756 25.9105 30.4384 27.0732 29.3625C28.6096 27.9408 29.813 26.1823 30.6342 24.1591C31.4555 22.136 31.8946 19.8482 31.8946 17.3678L28.0355 17.85Z" fill="url(#paint3_radial_18_57)"/>
        </g>
        <g filter="url(#filter4_f_18_57)">
        <path d="M16.0981 13.7836V20.4321H31.3431C31.4772 19.5216 31.9207 18.3433 31.9207 17.3679C31.9207 16.228 31.809 14.8357 31.6194 13.7836H16.0981Z" fill="#3086FF"/>
        </g>
        <g filter="url(#filter5_f_18_57)">
        <path d="M4.14931 6.0498C3.20853 7.10424 2.40482 8.28446 1.76758 9.56085C0.674303 11.7438 0.0756836 14.3976 0.0756836 16.9985C0.0756836 17.0352 0.0786449 17.0711 0.0788837 17.1077C0.563061 18.0586 6.76692 17.8765 7.07962 17.1077C7.07923 17.0718 7.07528 17.0368 7.07528 17.0008C7.07528 15.934 7.25122 15.1477 7.57191 14.1833C7.96752 12.9936 8.58696 11.8981 9.37906 10.9542C9.55862 10.7194 10.0376 10.2146 10.1773 9.91175C10.2305 9.79641 10.0807 9.73167 10.0723 9.69107C10.0629 9.64566 9.86198 9.68218 9.81696 9.64836C9.67404 9.54096 9.39101 9.48488 9.21914 9.43503C8.8518 9.32848 8.243 9.09351 7.90486 8.84994C6.836 8.08001 5.16795 7.16033 4.14931 6.0498Z" fill="url(#paint4_radial_18_57)"/>
        </g>
        <g filter="url(#filter6_f_18_57)">
        <path d="M7.92847 9.6956C10.407 11.2336 11.1198 8.91927 12.7677 8.19506L9.90116 2.10553C8.84667 2.55954 7.85039 3.12361 6.92599 3.78267C5.54548 4.76693 4.32639 5.96801 3.31934 7.33486L7.92847 9.6956Z" fill="url(#paint5_radial_18_57)"/>
        </g>
        <g filter="url(#filter7_f_18_57)">
        <path d="M8.93703 25.2322C5.60986 26.4627 5.08898 26.5068 4.78271 28.6191C5.36797 29.2041 5.99679 29.7453 6.665 30.236C8.45802 31.5526 11.907 33.3061 16.318 33.3061C16.3232 33.3061 16.3281 33.3057 16.3333 33.3057V26.4653C16.3299 26.4653 16.3261 26.4656 16.3228 26.4656C14.671 26.4656 13.3511 26.0211 11.9978 25.2483C11.6641 25.0577 11.0588 25.5694 10.751 25.3407C10.3266 25.0252 9.30516 25.6125 8.93703 25.2322Z" fill="url(#paint6_radial_18_57)"/>
        </g>
        <g opacity="0.5" filter="url(#filter8_f_18_57)">
        <path d="M14.3862 26.2499V33.1872C15.0034 33.2612 15.6457 33.3061 16.3195 33.3061C16.9949 33.3061 17.6484 33.2706 18.2833 33.2053V26.2966C17.5718 26.4213 16.9016 26.4656 16.3243 26.4656C15.6594 26.4656 15.0128 26.3863 14.3862 26.2499Z" fill="url(#paint7_linear_18_57)"/>
        </g>
        </g>
        <defs>
        <filter id="filter0_f_18_57" x="-0.390001" y="16.6376" width="13.1247" height="12.2721" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="0.23504" result="effect1_foregroundBlur_18_57"/>
        </filter>
        <filter id="filter1_f_18_57" x="15.4176" y="0.341627" width="12.2302" height="9.96592" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="0.23504" result="effect1_foregroundBlur_18_57"/>
        </filter>
        <filter id="filter2_f_18_57" x="3.58998" y="0.320875" width="13.3303" height="10.9862" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="0.23504" result="effect1_foregroundBlur_18_57"/>
        </filter>
        <filter id="filter3_f_18_57" x="14.4039" y="16.8977" width="17.9607" height="16.8539" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="0.23504" result="effect1_foregroundBlur_18_57"/>
        </filter>
        <filter id="filter4_f_18_57" x="15.6281" y="13.3136" width="16.7624" height="7.58866" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="0.23504" result="effect1_foregroundBlur_18_57"/>
        </filter>
        <filter id="filter5_f_18_57" x="-0.394396" y="5.57973" width="11.053" height="12.6447" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="0.23504" result="effect1_foregroundBlur_18_57"/>
        </filter>
        <filter id="filter6_f_18_57" x="0.0144858" y="-1.19932" width="16.0579" height="14.7167" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="1.65243" result="effect1_foregroundBlur_18_57"/>
        </filter>
        <filter id="filter7_f_18_57" x="4.31264" y="24.7348" width="12.4909" height="9.04148" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="0.23504" result="effect1_foregroundBlur_18_57"/>
        </filter>
        <filter id="filter8_f_18_57" x="13.9162" y="25.7798" width="4.83713" height="7.99643" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="0.23504" result="effect1_foregroundBlur_18_57"/>
        </filter>
        <radialGradient id="paint0_radial_18_57" cx="0" cy="0" r="1" gradientTransform="matrix(-0.652028 -16.007 23.4431 -0.960568 12.1182 28.1984)" gradientUnits="userSpaceOnUse">
        <stop offset="0.141612" stopColor="#1ABD4D"/>
        <stop offset="0.247515" stopColor="#6EC30D"/>
        <stop offset="0.311547" stopColor="#8AC502"/>
        <stop offset="0.366013" stopColor="#A2C600"/>
        <stop offset="0.445673" stopColor="#C8C903"/>
        <stop offset="0.540305" stopColor="#EBCB03"/>
        <stop offset="0.615636" stopColor="#F7CD07"/>
        <stop offset="0.699345" stopColor="#FDCD04"/>
        <stop offset="0.771242" stopColor="#FDCE05"/>
        <stop offset="0.860566" stopColor="#FFCE0A"/>
        </radialGradient>
        <radialGradient id="paint1_radial_18_57" cx="0" cy="0" r="1" gradientTransform="matrix(11.0732 -2.72621e-05 -1.55639e-05 14.3428 26.7386 9.49671)" gradientUnits="userSpaceOnUse">
        <stop offset="0.408458" stopColor="#FB4E5A"/>
        <stop offset="1" stopColor="#FF4540"/>
        </radialGradient>
        <radialGradient id="paint2_radial_18_57" cx="0" cy="0" r="1" gradientTransform="matrix(-15.5144 8.6182 11.6604 21.1152 20.692 -1.28521)" gradientUnits="userSpaceOnUse">
        <stop offset="0.231273" stopColor="#FF4541"/>
        <stop offset="0.311547" stopColor="#FF4540"/>
        <stop offset="0.457516" stopColor="#FF4640"/>
        <stop offset="0.540305" stopColor="#FF473F"/>
        <stop offset="0.699346" stopColor="#FF5138"/>
        <stop offset="0.771242" stopColor="#FF5B33"/>
        <stop offset="0.860566" stopColor="#FF6C29"/>
        <stop offset="1" stopColor="#FF8C18"/>
        </radialGradient>
        <radialGradient id="paint3_radial_18_57" cx="0" cy="0" r="1" gradientTransform="matrix(-28.1358 -36.8367 -13.5573 10.4163 16.5649 31.2012)" gradientUnits="userSpaceOnUse">
        <stop offset="0.131546" stopColor="#0CBA65"/>
        <stop offset="0.209784" stopColor="#0BB86D"/>
        <stop offset="0.297297" stopColor="#09B479"/>
        <stop offset="0.396257" stopColor="#08AD93"/>
        <stop offset="0.477124" stopColor="#0AA6A9"/>
        <stop offset="0.568425" stopColor="#0D9CC6"/>
        <stop offset="0.667385" stopColor="#1893DD"/>
        <stop offset="0.768727" stopColor="#258BF1"/>
        <stop offset="0.858506" stopColor="#3086FF"/>
        </radialGradient>
        <radialGradient id="paint4_radial_18_57" cx="0" cy="0" r="1" gradientTransform="matrix(-1.99111 17.2127 23.7294 2.76118 14.9579 3.82676)" gradientUnits="userSpaceOnUse">
        <stop offset="0.366013" stopColor="#FF4E3A"/>
        <stop offset="0.457516" stopColor="#FF8A1B"/>
        <stop offset="0.540305" stopColor="#FFA312"/>
        <stop offset="0.615636" stopColor="#FFB60C"/>
        <stop offset="0.771242" stopColor="#FFCD0A"/>
        <stop offset="0.860566" stopColor="#FECF0A"/>
        <stop offset="0.915033" stopColor="#FECF08"/>
        <stop offset="1" stopColor="#FDCD01"/>
        </radialGradient>
        <radialGradient id="paint5_radial_18_57" cx="0" cy="0" r="1" gradientTransform="matrix(-5.75533 6.38408 -17.9535 -16.2812 12.1586 3.6482)" gradientUnits="userSpaceOnUse">
        <stop offset="0.315904" stopColor="#FF4C3C"/>
        <stop offset="0.603818" stopColor="#FF692C"/>
        <stop offset="0.726837" stopColor="#FF7825"/>
        <stop offset="0.884534" stopColor="#FF8D1B"/>
        <stop offset="1" stopColor="#FF9F13"/>
        </radialGradient>
        <radialGradient id="paint6_radial_18_57" cx="0"cy="0" r="1" gradientTransform="matrix(-15.5144 -8.6182 11.6604 -21.1152 20.692 35.2846)" gradientUnits="userSpaceOnUse">
        <stop offset="0.231273" stopColor="#0FBC5F"/>
        <stop offset="0.311547" stopColor="#0FBC5F"/>
        <stop offset="0.366013" stopColor="#0FBC5E"/>
        <stop offset="0.457516" stopColor="#0FBC5D"/>
        <stop offset="0.540305" stopColor="#12BC58"/>
        <stop offset="0.699346" stopColor="#28BF3C"/>
        <stop offset="0.771242" stopColor="#38C02B"/>
        <stop offset="0.860566" stopColor="#52C218"/>
        <stop offset="0.915033" stopColor="#67C30F"/>
        <stop offset="1" stopColor="#86C504"/>
        </radialGradient>
        <linearGradient id="paint7_linear_18_57" x1="14.3862" y1="29.778" x2="18.2833" y2="29.778" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0FBC5C"/>
        <stop offset="1" stopColor="#0CBA65"/>
        </linearGradient>
        </defs>
    </svg>
);

export function LoginForm() {
  const router = useRouter();
  const { toast } = useToast();
  const { login, loading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<LoginFormInputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false
    },
  });

  async function onSubmit(values: LoginFormInputs) {
    try {
      await login(values);
      toast({
        title: "Login Successful",
        description: "Welcome back!",
      });
      router.push('/');
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: "Invalid credentials. Please try again.",
      });
    }
  }

  return (
    <div className="flex-1 flex items-center justify-center p-4 md:p-8">
      <div className="max-w-md w-full">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">Log In</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input placeholder="Enter Your Email Id" {...field} className="h-12 pr-10" />
                      <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Your Password"
                        {...field}
                        className="pr-10 h-12"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5 text-muted-foreground" /> : <Eye className="h-5 w-5 text-muted-foreground" />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center justify-between">
              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-normal">
                        Remember Me
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <div className="text-sm">
                <Link href="#" className="font-medium text-red-600 hover:text-red-500">
                  Forgot Password?
                </Link>
              </div>
            </div>

            <Button type="submit" className="w-full h-12 text-lg rounded-full" size="lg" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Log In
            </Button>
          </form>
        </Form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-background px-2 text-muted-foreground">OR CONTINUE WITH</span>
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-6">
              <Button variant="outline" size="icon" className="h-12 w-12 rounded-full">
                <span className="sr-only">Sign in with Apple</span>
                <AppleIcon className="h-6 w-6" />
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12 rounded-full">
                  <span className="sr-only">Sign in with Facebook</span>
                  <FacebookIcon className="h-8 w-8" />
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12 rounded-full">
                <span className="sr-only">Sign in with Google</span>
                <GoogleIcon className="h-6 w-6" />
              </Button>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm">
          Doesn't have an account?{' '}
          <Link href="/signup" className="font-medium text-primary hover:text-primary/90">
            Create One
          </Link>
        </div>
      </div>
    </div>
  );
}
