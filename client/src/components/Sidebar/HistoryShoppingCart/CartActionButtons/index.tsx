import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { usePurchaseList } from '../../../../hooks/usePurchaseList';

import { FormButtons } from "../../components/FormButtons/styles";
import { AlertDialogAction, AlertDialogButtons, AlertDialogCancel, AlertDialogContent, AlertDialogOverlay, AlertDialogTitle } from './styles';

interface CartActionButtonsProps {
    id: string;
}

export function CartActionButtons({ id }: CartActionButtonsProps) {
	const { updateCartStatus } = usePurchaseList();

    function handleCancelList() {
        updateCartStatus(id, "cancelled");
	}

	function handleCompleteList() {
		updateCartStatus(id, "completed");
	}

    return (
        <FormButtons>
            <AlertDialog.Root>
                <AlertDialog.Trigger asChild>
                    <input type='reset' value="cancel" />
                </AlertDialog.Trigger>
                <AlertDialog.Portal>
                    <AlertDialogOverlay />
                    <AlertDialogContent>
                        <AlertDialogTitle>Are you sure that you want to cancel this list?</AlertDialogTitle>
                        <AlertDialogButtons>
                            <AlertDialogCancel asChild>
                                <input type='reset' value="cancel" />
                            </AlertDialogCancel>
                            <AlertDialogAction asChild>
                                <input type='submit' value="Yes" onClick={handleCancelList} />
                            </AlertDialogAction>
                        </AlertDialogButtons>
                    </AlertDialogContent>
                </AlertDialog.Portal>
            </AlertDialog.Root>

            <input type='submit' value="Complete" onClick={handleCompleteList} />
        </FormButtons>
    );
}