import Swal from 'sweetalert2';

const onlineStatus = window.navigator.onLine;
const checkOnline = {
	status: () => {
		if (onlineStatus === false) {
			return Swal.fire({
				title: 'Your connection offline',
				text: 'Please check your connection😪',
				icon: 'warning',
			});
		}
		return false;
	},
};

export default checkOnline;
