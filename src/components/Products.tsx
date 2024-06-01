function Products(){


    const  margin:React.CSSProperties={
        marginBottom:'20px'
    }

    return (

        <>

            <div className="container">

                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4" style={margin}>
                        <div className="form-group">
                            <label htmlFor="customerName">Product Name</label>
                            <input type="text" className="form-control" id="customerName"/>
                        </div>

                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="form-group">
                            <label htmlFor="price">Unit price</label>
                            <input type="number" className="form-control" id="price"/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="form-group">
                            <label htmlFor="customerSalary">QTY On hand</label>
                            <input type="number" className="form-control" id="customerSalary"/>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4" style={margin}>
                        <div className="form-group">
                            <label htmlFor="image">Image</label>
                            <input type="file" className="form-control" id="image"/>
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

                <div className="row">
                    <div className="col-12  ">
                        <button className="btn btn-primary col-12">Save Product</button>
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
                                <th>QTY on hand</th>
                                <th>Unit Price</th>
                                <th>Delete Option</th>
                                <th>Update Option</th>
                                <th>See more</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td>#1002</td>
                                <td>Nimal bandra</td>
                                <td>colombo-5</td>
                                <td>55000</td>
                                <td>
                                    <button className="btn btn-danger btn-sm">Delete</button>
                                </td>
                                <td>
                                    <button className="btn btn-outline-danger btn-sm">Update</button>
                                </td>
                                <td>
                                    <button className="btn btn-outline-info btn-sm">View</button>
                                </td>
                            </tr>

                            </tbody>

                        </table>
                    </div>
                </div>


            </div>




        </>


    )
}

export default Products