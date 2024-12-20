
import logo from "./../assets/img/logo.png"
import Home from "./HomePage";
import React, { useRef } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
export function Invoice() {

    const printRef = useRef();

    const generatePDF = async () => {
        const element = printRef.current;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/png');

        const pdf = new jsPDF();
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

        pdf.addImage(data, 'pdf', 0, 0, pdfWidth, pdfHeight);
        pdf.save('document.pdf');
    };

    return <>
    <div ref={printRef}>
    <h1 style={{ textAlign:"center", }}>Tax Invoice</h1>
<section > render is a Node specific API. You're either using this method in a browser, or your bundler is not loading react-pdf from the appropriate web build.

    <div className="row" style={{marginTop:"50px"}} >
        <div className="col text-center"><img src={logo} width="150" height="150" /></div>
        <div className="col">
            <div className="row row-cols-1">
                <div className="col">
                    <div className="row">
                        <div className="col text-end"><label className="col-form-label">Phone Number</label></div>
                        <div className="col"><label className="col-form-label">+91 6382110973</label></div>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col text-end"><label className="col-form-label">Alternate Phone Number</label></div>
                        <div className="col"><label className="col-form-label">+91 8344304843</label></div>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col text-end"><label className="col-form-label">Email Id</label></div>
                        <div className="col"><label className="col-form-label">maxcrackers@gmail.com</label></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section>
    <div className="row row-cols-1" style={{marginTop:"30px"}}>
        <div className="col text-center">
            <h1>Max Crackers</h1>
        </div>
        <div className="col text-center"><label className="col-form-label">Door no :220, Gsquare-inifiniti phase 1 ,Parvathy avenue , Manancheri , kundrathur 600069</label></div>
    </div>
    <div className="row" style={{marginTop:"70px"}} > 
        <div className="col">
            <div className="table-responsive">
                <table className="table" >
                    <thead>
                        <tr />
                    </thead>
                    <tbody>
                        <tr>
                            <td>Customer Name&nbsp;</td>
                            <td>Sivapandi V</td>
                        </tr>
                        <tr>
                            <td>Customer Address</td>
                            <td>110A, Kamarajapuram North Street, Thirumangalam,<br />Madurai - 625706</td>
                        </tr>
                        <tr>
                            <td>Customer Phone Number</td>
                            <td>+91 6381748596</td>
                        </tr>
                        <tr>
                            <td>Customer Email Address</td>
                            <td>sivapandiv@gmail.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="col">
            <div className="row">
                <div className="col"><label className="col-form-label">Order Number</label></div>
                <div className="col"><label className="col-form-label">2410170517</label></div>
            </div>
            <div className="row">
                <div className="col"><label className="col-form-label">Order Date</label></div>
                <div className="col"><label className="col-form-label">18-12-2024</label></div>
            </div>
            <div className="row">
                <div className="col"><label className="col-form-label">Tracking ID</label></div>
                <div className="col"><label className="col-form-label">18TXY123789</label></div>
            </div>
        </div>
    </div>
</section>
<section style={{marginTop:"70px"}}>
    <div className="table-responsive">
        <table className="table">
            <thead>
                <tr>
                    <th>S.No</th>
                    <th colspan="3">Product Name</th>
                    <th className="text-center">Qty</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Net Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td colspan="3">2 3/4" Kuruvi</td>
                    <td className="text-center">2</td>
                    <td className="text-center">7.00</td>
                    <td className="text-center">14.00</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td colspan="3">3 1/2" Lakshmi</td>
                    <td className="text-center">2</td>
                    <td className="text-center">12.00</td>
                    <td className="text-center">24.00</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div className="row text-end">
        <div className="col"><label className="col-form-label">CGST</label></div>
        <div className="col text-center"><label className="col-form-label">0%</label></div>
    </div>
    <div className="row text-end">
        <div className="col"><label className="col-form-label">GST</label></div>
        <div className="col text-center"><label className="col-form-label">0%</label></div>
    </div>
    <div className="row text-end">
        <div className="col"><label className="col-form-label">Total</label></div>
        <div className="col text-center"><label className="col-form-label">Rs. 38.00</label></div>
    </div>
</section>
</div>
<button type="button" onClick={generatePDF} className="btn btn-primary btn-sm">Download Pdf</button>
    </>;
}
export default Invoice;