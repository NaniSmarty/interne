import React, { Component } from 'react';
class Addquestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Amount: ''
        };
    }
    render() {
        const handleChange = (event) => {
            const newValue = event.target.value;
            if (/^\d*$/.test(newValue)) {
                this.setState({ Amount: newValue });
            }
        };
        return (
            <>
                <div className="container-fluid py-4  d-flex justify-content-center align-items-center">
                    <div className="row w-100">
                        <div className="col-xl-12 col-sm-6 mb-xl-0 mb-4 d-flex justify-content-center">
                            {/* <form role="form" className="text-start bg-white p-3 rounded shadow-sm"> */}
                            <div className="container py-4">
                                <div className="row justify-content-Left">
                                    <div className="col-md-8 col-lg-12">
                                        <div class="col-sm-12 d-flex ">
                                            <div className='input-group input-group-outline'>
                                                <div className="col-lg-3 mx-4">
                                                    <input class="form-control " value={this.state.Amount} onChange={handleChange} type="text" name="SearchString" placeholder="Email-ID"></input>
                                                </div><div className="col-lg-3 mx-4">
                                                    <input class="form-control" value={this.state.Amount} onChange={handleChange} type="text" name="SearchString" placeholder="Number of Questions"></input>
                                                </div> <div className="col-lg-4">
                                                    <button type="submit" class="btn btn-default btn-info mx-2">Filter</button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <form className="form-inline"> */}
                                        {/* <div className="form-group me-2">
                                                    <label className="form-label">Email</label>
                                                </div>
                                                <div className="form-group me-2">
                                                    <input type="email" className="form-control" placeholder="Enter your email" />
                                                </div>
                                                <div className="form-group">
                                                    <button type="button" className="btn bg-gradient-primary">
                                                        Sign in
                                                    </button>
                                                </div> */}
                                        {/* </form> */}
                                    </div>
                                </div>
                            </div>
                            {/* </form> */}
                        </div>
                        <div class="row p-4">
                            <div class="col-12">
                                <div class="card my-4">
                                    <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                        <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                            <h6 class="text-white text-capitalize ps-3">Add Questions</h6>
                                        </div>
                                    </div>
                                    <div class="card-body px-0 pb-2">
                                        <div class="table-responsive p-0">
                                            <table class="table align-items-center mb-0">
                                                <thead>
                                                    <tr>
                                                        <th class="text-center text-uppercase text-secondary  font-weight-bolder opacity-9">Email-ID</th>
                                                        <th class="text-center text-uppercase text-secondary  font-weight-bolder opacity-9">Total Questions</th>
                                                        <th class="text-center text-uppercase text-secondary  font-weight-bolder opacity-9">DateTime</th>
                                                        <th class="text-center text-uppercase text-secondary font-weight-bolder opacity-9">Status</th>
                                                        <th class="text-center text-uppercase text-secondary font-weight-bolder opacity-9">Approved By</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td class="align-middle text-center">
                                                            <span class="text-secondary text-xs font-weight-bold">john@creative-tim.com</span>
                                                        </td>
                                                        <td class="align-middle text-center">
                                                            <span class="text-secondary text-xs font-weight-bold">123456</span>
                                                        </td>
                                                        <td class="align-middle text-center">
                                                            <span class="text-secondary text-xs font-weight-bold">23/04/18 13:12:24</span>
                                                        </td>
                                                        <td class="align-middle text-center">
                                                            <span class="badge badge-sm bg-gradient-success">Approved</span>
                                                        </td>
                                                        <td class="align-middle text-center">
                                                            <span class="text-secondary text-xs font-weight-bold">Jagan</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Addquestion;

