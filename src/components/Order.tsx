function Order(){

    const  margin:React.CSSProperties={
        marginBottom:'20px'
    }

    const  bottomContext:React.CSSProperties={
        width:'100%',
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",

    }




    return (

        <>

            <div className="container">

                <div className="row">
                    <div className="col-12 col-sm-6 col-md-3" style={margin}>
                        <div className="form-group">
                            <label htmlFor="product">Select Product</label>
                            <select id="product" className="form-control">
                                <option value="use options" disabled defaultValue="use options"> Use Options</option>
                                <option value="#"> Customer1</option>
                                <option value="#">Customer2</option>

                            </select>
                        </div>

                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="form-group">
                            <label htmlFor="customerName">Customer Name</label>
                            <input type="text" disabled className="form-control" id="customerName"/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="form-group">
                            <label htmlFor="customerAddress">Customer Address</label>
                            <input type="text" disabled className="form-control" id="customerAddress"/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="form-group">
                            <label htmlFor="customerAddress">Customer Address</label>
                            <input type="text" disabled className="form-control" id="customerAddress"/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="form-group">
                            <label htmlFor="description">Product Description</label>
                            <input type="text" disabled className="form-control" id="name"/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="form-group">
                            <label htmlFor="unitPrice">Unit Price</label>
                            <input type="number" disabled className="form-control" id="unitPrice"/>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-3" style={margin}>
                        <div className="form-group">
                            <label htmlFor="QTY on hand">QTY on hand</label>
                            <input type="file" disabled className="form-control" id="QTY on hand"/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3" style={margin}>
                        <div className="form-group">
                            <label htmlFor="QTY">QTY</label>
                            <input type="file" className="form-control" id="QTY"/>
                        </div>
                    </div>


                    <div className="col-12 ">

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea className='form-control' id='description'/>
                        </div>

                    </div>


                </div>
                <br/>
                <hr/>

                <div className="row">
                    <div className="col-12  ">
                        <button className="btn btn-primary col-12">Add Product</button>
                    </div>
                </div>
                <hr/>
                <div className="row">

                <div className="col-12">
                        <form className="col-12" action="">

                            <input className="form-control" type="search" placeholder="search customer here"/>

                        </form>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-12">
                        <table className="table-hover table-bordered col-12">

                            <thead>
                            <tr>
                                <th>#Id</th>
                                <th>Product Name</th>
                                <th>Unit Price</th>
                                <th>QTY</th>
                                <th>Total</th>
                                <th>Delete</th>

                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td>#1002</td>
                                <td>Product-1</td>
                                <td>2500</td>
                                <td>55</td>
                                <td>250000</td>
                                <td>
                                    <button className="btn btn-danger btn-sm">Delete</button>
                                </td>

                            </tr>

                            </tbody>

                        </table>
                        <br/>
                        <div className="bottom-context" style={bottomContext}>

                            <div className="total-outer">
                              <h1>Total :25000</h1>

                            </div>
                            <div className="place-order butto n-context">
                                <button  className="btn btn-primary" >Place Order</button>

                            </div>

                        </div>

                    </div>
                </div>


            </div>


        </>
    )
}

export default Order