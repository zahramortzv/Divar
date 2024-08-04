import { useState } from "react"

import SendOtpForm from "../components/templates/SendOtpForm"
import CheckOtpForm from "../components/templates/CheckOtpForm"

function AuthPage() {
    const [step, setStep] = useState(1)
    const [mobile, setMobile] = useState("")
    const [code, setCode] = useState("")
    const [otpResponse, setOtpResponse] = useState(null);
    return (
        <div>
            {step === 1 && <SendOtpForm setOtpResponse={setOtpResponse} setStep={setStep} mobile={mobile} setMobile={setMobile} />}
            {step === 2 && <CheckOtpForm otpResponse={otpResponse} setStep={setStep} code={code} setCode={setCode} mobile={mobile} />}
        </div>
    )
}

export default AuthPage