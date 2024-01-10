import React from 'react'
import { useEffect, useRef } from 'react'
import { WidgetInstance } from 'friendly-challenge'

type FriendlyCaptchaProps = {
  successCallback: (solution: string) => void
}

const FriendlyCaptcha = ({ successCallback }: FriendlyCaptchaProps) => {
  const container = useRef(null)
  const widget = useRef(null)

  const doneCallback = (solution: string) => {
    console.log('Captcha was solved. The form can be submitted.')
    successCallback(solution)
  }

  const errorCallback = (err: any) => {
    console.log('There was an error when trying to solve the Captcha.')
    console.log(err)
  }

  useEffect(() => {
    if (!widget.current && container.current) {
      const friendlyCaptcha = new WidgetInstance(container.current, {
        doneCallback: doneCallback,
        errorCallback: errorCallback,
        sitekey: process.env.REACT_APP_FRIENDLY_CAPTCHA_SITE_KEY,
      })

      friendlyCaptcha.start()
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      widget.current = friendlyCaptcha
    }

    return () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (widget.current != undefined) widget.current.reset()
    }
  }, [container])

  return <div ref={container} className="frc-captcha" data-sitekey={process.env.REACT_APP_FRIENDLY_CAPTCHA_SITE_KEY} data-start="none" />
}

export default FriendlyCaptcha
