import {DELETE_ANNOUNCEMENT} from "../../utils/ApiUrl";
import {authOptions} from "../../utils/Api";
import swal from "sweetalert";
import Swal from 'sweetalert2'
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";

export default function DeleteAnnouncement(props) {

    const handleDelete = () => {
        const {announcement} = props

        Swal.fire({
            title: 'Do you want to delete the announcement ?',
            icon: 'warning',
            showDenyButton: true,
            confirmButtonText: `Yes`,
            confirmButtonColor: '#23d20f',
            denyButtonColor: '#dD20F23',
            denyButtonText: `Cancel`,
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(DELETE_ANNOUNCEMENT(announcement.id), authOptions)
                    .then(response => {
                        if (response.status === 200) {
                            swal({
                                title: "Done!",
                                text: "Delete Announcement Successfully",
                                icon: "success",
                            })

                            props.deleteAnnouncement()

                        }
                    }).catch((error) => {
                        if (error.response) {
                            swal({
                                title: "Error!",
                                text: (error.message),
                                icon: "error",
                                dangerMode: true,
                            })
                        }
                    }
                )
            } else if (result.isDenied) {
                Swal.fire('Cancelled', 'Delete announcement was cancelled', 'info')
            }
        })

    }
    return (
        <DeleteIcon fontSize="inherit" onClick={() => {
            handleDelete(props.id)
        }}/>
    )
}
