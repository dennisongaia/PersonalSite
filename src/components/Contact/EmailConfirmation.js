import React from 'react'
import * as Toast from '@radix-ui/react-toast';

const EmailConfirmation = ({ toastOpen, setToastOpen, description, title }) => {

    return (
        <Toast.Provider swipeDirection="right">
            <Toast.Root className="ToastRoot" open={toastOpen} onOpenChange={setToastOpen}>
                <Toast.Title className="ToastTitle">{title}</Toast.Title>
                <Toast.Description asChild>
                    <div className="ToastDescription">
                        {description}
                    </div>
                </Toast.Description>
            </Toast.Root>
            <Toast.Viewport className="ToastViewport" />
        </Toast.Provider>
    )
}
export default EmailConfirmation
