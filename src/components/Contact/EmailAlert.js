import React, {useState} from 'react'
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import EmailForm from "./EmailForm";
import EmailConfirmation from "./EmailConfirmation";

const EmailAlert = () => {
    const[open, setOpen] = useState(false)
    const [toastOpen, setToastOpen] = useState(false);
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');

    return (
        <AlertDialog.Root open={open} onOpenChange={setOpen}>
            <AlertDialog.Trigger asChild>
                <button className="AlertButton">Email Me</button>
            </AlertDialog.Trigger>
            <AlertDialog.Portal>
                <AlertDialog.Overlay className="AlertDialogOverlay" />
                <AlertDialog.Content className="AlertDialogContent">
                    <AlertDialog.Title className="AlertDialogTitle">Send Me an Email</AlertDialog.Title>
                    <AlertDialog.Description className="AlertDialogDescription">
                        <EmailForm setOpen={setOpen} setToastOpen={setToastOpen} setDescription={setDescription} setTitle={setTitle}/>
                    </AlertDialog.Description>
                </AlertDialog.Content>
                <EmailConfirmation description={description} title={title} toastOpen={toastOpen} setToastOpen={setToastOpen}/>
            </AlertDialog.Portal>
        </AlertDialog.Root>
    )
}
export default EmailAlert
