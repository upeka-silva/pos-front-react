function Customer(){


    return (

        <>
            <div className="container">

                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="form-group">
                            <label htmlFor=""></label>
                            <input type="text" className="form-control" id="customerName"/>
                        </div>

                    </div>
                    <div className="col-12 col-sm-6 col-md-4">

                        <div className="form-group">
                            <label htmlFor=""></label>
                            <input type="text" className="form-control" id="customerAddress"/>
                        </div>

                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="form-group">
                            <label htmlFor=""></label>
                            <input type="number" className="form-control" id="customerSalary"/>
                        </div>
                    </div>

                </div>
                <br/>

                <div className="row">
                    <div className="col-12  ">
                        <button className="btn btn-primary col-12">Save Customer</button>
                    </div>
                </div>
                <hr/>
                <div className="row">

                    <div className="col-12">
                        <form className="col-12" action="">

                           <input className="form-control" type="search" placeholder="search customer here" />

                        </form>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-12">
                        <table className="table-hover table-bordered col-12">

                            <thead >
                            <tr>
                                <th>#Id</th>
                                <th>Customer Name</th>
                                <th>Address</th>
                                <th>Salary</th>
                                <th>Delete Option </th>
                                <th>Update Option</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td>#1002</td>
                                <td>Nimal bandra</td>
                                <td>colombo-5</td>
                                <td>55000</td>
                                <td>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                                <td>
                                    <button className="btn btn-outline-danger">Update</button>
                                </td>
                            </tr>
                            <tr>
                                <td>#1002</td>
                                <td>Nimal bandra</td>
                                <td>colombo-5</td>
                                <td>55000</td>
                                <td>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                                <td>
                                    <button className="btn btn-outline-danger">Update</button>
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

export default Customer