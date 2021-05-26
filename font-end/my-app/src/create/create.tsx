import React, { useState, } from "react";
import Menu from '../menu/menu';
import './create.scss'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TaskService from '../service/task.service'
import BillService from '../service/bill.sevice'
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const useStyles1 = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);


interface ITaskDetail{
    name:String,
    quantity?:String,
    price:any,
    note?:String
}

interface IListTaskDB{
    id:number,
    name:String,
    quantity?:String,
    price:String,
    status:boolean
}

const getRequestParams = (name_customer:String, phone_customer:any,license_plates:any,id_employee:any,price_bill:any,
    check:any,bill_detailList:Array<ITaskDetail>
    ) => {
    let params : any = {};
  
    if (name_customer) {
      params["nameCustomer"] = name_customer;
    }
  
    if (phone_customer) {
      params["phoneCustomer"] = phone_customer;
    }

    if(license_plates){
      params["licensePlates"] = license_plates;

    }

    if(id_employee){
        params["idEmployee"] = id_employee;
  
    }

    if(price_bill){
        params["priceBill"] = price_bill;
  
    }

    if(check){
        params["check"] = check;
  
    }

    if(bill_detailList){
        params["billDetailList"] = bill_detailList;
    }
  
    return params;
  };

export default function Create(){
    const classes = useStyles();
    const classes1 = useStyles1();

    const [nameTaskDetail,setNameTaskDetail] = useState<any>();
    const [quantityDetail,setQuantityDetail] = useState<String>();
    const [noteDetail,setNoteDetail] = useState<String>("");
    const [priceDetail,setPriceDetail] = useState<any>();
    const [totalPrice,setTotalPrice] = useState<number>();
    const [checkAdd,setCheckAdd] = useState<boolean>(false);
    const [listTaskDB,setListTaskDB] = useState<Array<IListTaskDB>>([]);
    const [task,setTask] = useState<Array<ITaskDetail>>([
    ]);

    const [checkPrice,setCheckPrice] = useState<any>();
    const [phoneCustomer,setPhoneCustomer] = useState<any>();


    const [nameCustomer,setNameCustomer] = useState<any>();
    const [licensePlates,setLicensePlates] = useState<any>();
    const [idEmployee,setIdEmployee] = useState<any>();
    const [checkUpdate,setCheckUpdate] = useState<any>();
    React.useEffect(() => {
        getAllTask()
    }, [checkAdd]);

    const getAllTask = ()=>{
        TaskService.getAllTaskName()
        .then((Response:any)=>{
            setListTaskDB(Response.data);            
        })
    }

    const addTaskDetail =()=>{
        let datas = task;
        let billDetail : ITaskDetail;
        billDetail = {
            name: nameTaskDetail,
            quantity:quantityDetail,
            price:priceDetail,
            note:noteDetail
          };

        datas.push(billDetail);
        setCheckAdd(!checkAdd);
        setNameTaskDetail("");
        setQuantityDetail("");
        setNoteDetail("");
        setPriceDetail("");
        console.log(datas)
    }

    const addBill=()=>{
        const params = getRequestParams(nameCustomer,phoneCustomer,licensePlates,idEmployee,totalPrice,checkUpdate,task);
        BillService.addBill(params).then((Response:any)=>{
        })
    }

    
    return(
        <div id="create">

            <div>
                <Menu/>
            </div>

            <div className="main-create">

                <div className="create-top">
                    <h3>Tạo phiếu</h3>
                </div>

                <div className="create-center">
                    <div className="row">
                        <div className="col-md-8 left">

                            <div className="list-task">
                                <div className="result d-flex">
                                    <h5>Tổng tiền : 500.000Đ</h5>
                                    <button type="button" style={{position: "absolute",right:0,marginRight:10}}  className="btn btn-primary">Tạo phiếu</button>   
                                </div>
                                
                                <TableContainer component={Paper}>
                                    <Table className={classes.table} aria-label="simple table">
                                        <TableHead>
                                        <TableRow>
                                            <TableCell>Tên công việc</TableCell>
                                            <TableCell align="right">Số lượng</TableCell>
                                            <TableCell align="right">Thành tiền</TableCell>
                                            <TableCell align="right">Note</TableCell>
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                        {task.map((row) => (
                                            <TableRow>
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.quantity}</TableCell>
                                            <TableCell align="right">{row.price}</TableCell>
                                            <TableCell align="right">{row.note}</TableCell>
                                            </TableRow>
                                        ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                       
                        </div>

                        <div className="col-md-4 right">
                                <div className="create-task">
                                    <div className="task-customer">
                                            <h4>Khách hàng</h4>
                                            <div>
                                                <Autocomplete
                                                    id="free-solo-demo"
                                                    freeSolo
                                                    options={top100Films.map((option) => option.title)}
                                                    onSelect={(e:any)=>setNameCustomer(e.target.value)}
                                                    renderInput={(params:any) => (
                                                    <TextField {...params} label="Tên khách hàng" onChange={(e:any)=>setNameCustomer(e.target.value)} margin="normal" variant="outlined" />
                                                    )}
                                                />
                                                <div className="number-phone d-flex">
                                                    <TextField
                                                        className="input"
                                                        id="outlined-secondary"
                                                        label="Số điện thoại"
                                                        variant="outlined"
                                                        color="secondary"
                                                    />  
                                                    <TextField
                                                        className="input"
                                                        id="outlined-secondary"
                                                        label="Biển số xe"
                                                        variant="outlined"
                                                        color="secondary"
                                                    />
                                                    
                                                </div>
                                                <Autocomplete
                                                    id="combo-box-demo"
                                                    options={top100Films}
                                                    getOptionLabel={(option) => option.title}
                                                    style={{ width: 383 ,marginBottom:20}}
                                                    renderInput={(params) => <TextField {...params} label="Nhân viên phù hợp" variant="outlined" />}
                                                    />
                                             </div>
                                             <div>
                                                 <h4>Phiếu</h4>
                                                 <Autocomplete
                                                    id="combo-box-demo"
                                                    options={listTaskDB}
                                                    getOptionLabel={(option:any) => option.name + " - " + option.id}
                                                    style={{ width: 383 }}
                                                    onSelect={(e:any)=>setNameTaskDetail(e)}
                                                    renderInput={(params) => <TextField {...params} label="Công việc" variant="outlined" />}
                                                    />

                                                <div className="number-product d-flex">
                                                    <TextField
                                                        className="input"
                                                        id="outlined-secondary"
                                                        label="Số lượng"
                                                        variant="outlined"
                                                        value={quantityDetail}
                                                        color="secondary"
                                                        onChange={(e:any)=>setQuantityDetail(e.target.value)}
                                                    />  
                                                    <TextField
                                                        className="input"
                                                        id="outlined-secondary"
                                                        label="Thành tiền"
                                                        variant="outlined"
                                                        value={priceDetail}
                                                        color="secondary"
                                                        onChange={(e:any) => setPriceDetail(e.target.value)}
                                                    />

                                                   
                                                </div>   
                                                 
                                                <TextField
                                                        className="input"
                                                        id="outlined-secondary"
                                                        label="Ghi chú"
                                                        variant="outlined"
                                                        color="secondary"
                                                        value={noteDetail}
                                                        style={{width:382}}
                                                        onChange={(e:any)=>setNoteDetail(e.target.value)}
                                                    /> 

                                                <button type="button" onClick={addTaskDetail} className="btn btn-primary">Thêm công việc</button>    
                                                    
                                             </div>
                                             
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 }]