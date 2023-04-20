import { createStore } from "vuex";
// import axios from "axios";
const store = createStore({
    state: {
        boxes: [
            {
                id: 1,
                num: "6",
                txt: "New PO's",
                color:"background-color: #fff44f;"
            },
            {
                id: 2,
                num: "625",
                txt: "Total PO's",
                color:"background-color: #FFABAB;"
            },
            {
                id: 3,
                num: "615",
                txt: 'Total Supplies',
                color:"background-color: #87CBB9;"
            },
            {
                id: 4,
                num: "4",
                txt: 'Supplies In-Transit',
                color:"background-color: #FF6D60;"
            },
            {
                id: 5,
                num: "85,000",
                txt: 'Balance Amount',
                color:"background-color: #ABC4AA;"
            },
            {
                id: 6,
                num: "15,00,000",
                txt: 'Total Amount',
                color:"background-color: #FFB4B4;"
            },
            {
                id: 7,
                num: "3",
                txt: 'Purchase Return',
                color:"background-color: #F5C6EC;"
            },
            {
                id: 8,
                num: "1,00,000",
                txt: 'Current Debit Notes',
                color:"background-color: #94AF9F;"
            },
        ],
        datas:[
            {
                id:1,
                txt1:'Fabric 1 Name',
                tag:'SO/001008 {02/04/2023 & 18:30}', 
                img: "src/assets/cotton.jpg",
                btn:"Courier Request"
            },
            {
                id:1,
                txt1:'Fabric 2 Name',
                tag:'SO/1008 {02/04/2023 & 18:30}',
                img: "src/assets/cotton.jpg",
                btn:"Sample Approved"
            },
        ],
        orders:[
            {
                id:1,
                txt1:'Fabricator 1 Name FC/25',
                tag:'{02/04/2023 & 18:30}', 
                code:'Product Code 005008', 
                img: "src/assets/cotton.jpg",
                btn: "To be Delievered"
            },
            {
                id:2,
                txt1:'Fabricator 1 Name FC/25',
                tag:'{02/04/2023 & 18:30}', 
                code:'Product Code 005008', 
                img: "src/assets/cotton.jpg",
                btn: "To be Delievered"
            },
        ],
        demands :[
            {
                id:1,
                txt:" Supplier 1 Name Sc/005",
                txt1:'PO/230402001100',
                tag:'{02/04/2023 & 18:30}',
                txt2:'Fabric 1 Name',
                txt3:'2000 Mtr',
                txt4:'10,000 Mtr',
                txt5:'1000 Mtr',
                img: "src/assets/cotton.jpg",
                btn1:"Re-Order",
                btn2:"Cancel",
            },
        ],
        payments:[
            {
                id:1,
                Invoice:'2023/56',
                price:'Rs. 15,00,000/(incl GST)',
                txt3:'Fabric 1 Name', 
                txt4: "PO No. 2023/1088",
                txt5: "{02/04/2023 & 18:30}",
                img: "src/assets/cotton.jpg",
            },
            {
                id:2,
                Invoice:'2023/56',
                price:'Rs. 15,00,000/(incl GST)',
                txt3:'Fabric 1 Name', 
                txt4: "PO No. 2023/1088",
                txt5: "{02/04/2023 & 18:30}",
                img: "src/assets/cotton.jpg",
            },
        ],
        paymentDetail1s:[
            {
                id:1,
                txt2: '2023/56',
                txt3: 'Rs. 15,00,000/(Incl GST)',
                txt4: 'Fabric 1 Name',
                txt5: 'PO No. 2023/1088',
                txt6: '{02/04/2023 & 18:30',
                img: "src/assets/cotton.jpg",
            },
           
        ],
        paymentDetails:[
            {
                id:1,
                txt1: 'PO No. 2023/1088',
                txt2: '2023/56',
                txt3: 'Rs. 15,00,000/(Incl GST)',
                txt4: 'Fabric 1 Name',
                txt5: 'PO No. 2023/1088',
                txt6: '{02/04/2023 & 18:30',
                img: "src/assets/cotton.jpg",
            },
            {
                id:2,
                txt1: 'PO No. 2023/1091'
            },
            {
                id:3,
                txt1: 'PO No. 2023/1095'
            },
            {
                id:4,
                txt1: 'PO No. 2023/1098'
            },
            {
                id:5,
                txt1: 'PO No. 2023/1105'
            },
            {
                id:6,
                txt1: 'PO No. 2023/1108'
            },
        ],
        deleivers:[
            {
                id:1,
                tag:'{02/04/2023 & 18:30}',
                txt2:'Fabric 1 Name',
                txt3:'po No. 2023/1088', 
                txt4: "{02/04/2023 & 18:30}",
                txt5: "Invoice No. 2023/56",
                txt6: "Rs. 15,00,000/ (Incl GST)",
                img: "src/assets/cotton.jpg",
                btn: "Goods Rejected"
            },
            {
                id:1,
                tag:'{02/04/2023 & 18:30}',
                txt2:'Fabric 2 Name',
                txt3:'po No. 2023/1088', 
                txt4: "{02/04/2023 & 18:30}",
                txt5: "Invoice No. 2023/56",
                txt6: "Rs. 15,00,000/ (Incl GST)",
                img: "src/assets/cotton.jpg",
                btn: "In-Transit"
            },
        ],
        dispatches:[
            {
                id:1,
                tag:'{02/04/2023 & 18:30}',
                txt2:'Fabric 1 Name',
                txt3:'po No. 2023/1088', 
                txt4: "{02/04/2023 & 18:30}",
                txt5: "2023/56",
                txt6: "Rs. 15,00,000/ (Incl GST)",
                img: "src/assets/cotton.jpg",
                btn: "Goods Rejected"
            },
           
        ],
        notis:[
            {
                id: 1,
                imgl: "src/assets/c1.jpg",
                txt: "New catelog is been added to system.",
                tag: "23826 | Botton TOP",
                time: "6h"
            },
            {
                id: 2,
                imgl: "src/assets/c1.jpg",
                txt: "New catelog is been added to system.",
                tag: "23826 | Botton TOP",
                time: "17h"
            },
            {
                id: 3,
                imgl: "src/assets/c1.jpg",
                txt: "New catelog is been added to system.",
                tag: "23826 | Botton TOP",
                time: "17h"
            },
           
            
        ]
    },
    getters: {
        getBoxes(state) {
            return state.boxes;
        },
        getDatas(state) {
            return state.datas;
        },
        getOrders(state) {
            return state.orders;
        },
        getDemands(state) {
            return state.demands;
        },
        getPayments(state) {
            return state.payments;
        },
        getPaymentDetails(state) {
            return state.paymentDetails;
        },
        getPaymentDetail1s(state) {
            return state.paymentDetail1s;
        },
        getDeleivers(state) {
            return state.deleivers;
        },
        getDispatches(state) {
            return state.dispatches;
        },
        getNotis(state) {
            return state.notis;
        },
    },
    mutations: {

    },
    actions: {

    },
});
export default store;