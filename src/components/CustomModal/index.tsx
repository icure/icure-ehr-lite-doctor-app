import React, { ReactElement, CSSProperties } from 'react'
import { Modal, Button, ConfigProvider } from 'antd'

import { getWindowSize, breakpoints } from '../../helpers/windowSize'

interface PatientFormModalProps {
  isVisible: boolean
  handleClose: () => void
  closeBtnTitle?: string
  handleOk?: (value: unknown) => void
  okBtnTitle?: string | ReactElement
  children: ReactElement
  width?: number
  title: string
  customFooter?: ReactElement
  mode?: 'danger' | undefined
  okBtnDisabled?: boolean
}

export const CustomModal = ({
  isVisible,
  handleClose,
  handleOk,
  children,
  width,
  title,
  closeBtnTitle,
  okBtnTitle,
  customFooter,
  mode,
  okBtnDisabled,
}: PatientFormModalProps): ReactElement => {
  const { innerWidth } = getWindowSize()

  const modalStyles: { [key: string]: CSSProperties } = {
    header: {
      borderBottom: mode === 'danger' ? `1px solid #FAD1D1` : `1px solid #DCE7F2`,
      padding: innerWidth < breakpoints.md ? '16px' : '20px 24px',
      background: mode === 'danger' ? '#FDF3F3' : '#EEF6FE',
      borderRadius: '8px 8px 0px 0px',
      margin: 0,
    },
    mask: {
      background: 'rgba(8, 75, 131, 0.25)',
    },
    footer: {
      borderTop: mode === 'danger' ? `1px solid #FAD1D1` : `1px solid #DCE7F2`,
      padding: innerWidth < breakpoints.md ? '16px' : '20px 24px',
      margin: 0,
      background: 'white',
    },
    content: {
      padding: 0,
      background: 'white',
      height: innerWidth < breakpoints.md ? '100%' : 'auto',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      paddingBottom: 0,
    },
    body: {
      flexGrow: 1,
      display: 'flex',
      overflowY: 'scroll',
    },
  }

  const getResponsiveStyles = () => {
    if (innerWidth < breakpoints.md) {
      return {
        margin: 0,
        top: 0,
        height: '100%',
        paddingTop: 20,
        paddingBottom: 0,
        display: 'flex',
        background: 'rgba(8, 75, 131, 0.25)',
        overflow: 'hidden',
        maxWidth: '100vw',
      }
    } else {
      return {
        top: 100,
      }
    }
  }

  const getFooter = () => {
    if (customFooter) {
      return customFooter
    }

    return [
      closeBtnTitle && handleClose && (
        <Button key="back" onClick={handleClose}>
          {closeBtnTitle}
        </Button>
      ),
      okBtnTitle && handleOk && (
        <Button key="submit" type="primary" danger={mode === 'danger'} onClick={handleOk} disabled={okBtnDisabled}>
          {okBtnTitle}
        </Button>
      ),
    ]
  }

  return (
    <ConfigProvider
      modal={{
        styles: modalStyles,
      }}
    >
      <Modal
        open={isVisible}
        title={title}
        onCancel={handleClose}
        footer={getFooter()}
        style={getResponsiveStyles()}
        width={innerWidth < breakpoints.md ? '100vw' : (width ?? 1000)}
      >
        {children}
      </Modal>
    </ConfigProvider>
  )
}
