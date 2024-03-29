const PublicStore = {
    data: {
        showLoader: false,
        showMsg: false,
        displayMsg: '',
        typeMsg: 'success'
    },
    methods: {
        toggleShowLoader () {
            if(this.showLoader){
                PublicStore.data.showLoader = false;
            }else {
                PublicStore.data.showLoader = true;
            }
            console.log(this.showLoader);
        },
        showMsg(msg, typeMsg = null){
            //.. Set and display general alert message
            PublicStore.data.showMsg = true;
            PublicStore.data.displayMsg = msg;
            if(typeMsg){
                PublicStore.data.typeMsg = typeMsg;
            }
            //.. Remove message in X seconds
            const delay = 5000; //5 seconds
            setTimeout(function() {
                PublicStore.data.showMsg = false;
                PublicStore.data.typeMsg = 'success';
            }, delay);
        }
    }
};
export default PublicStore;
