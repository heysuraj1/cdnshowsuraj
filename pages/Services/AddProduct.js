import React from "react";

const AddProduct = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10 mt-3 mb-3">
            <div className="card mb-4">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Add Your Services</h5>
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label
                      className="form-label"
                      htmlFor="basic-default-fullname"
                    >
                      Service Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="basic-default-fullname"
                      placeholder="Website Designing, Graphic Designing, S.E.O."
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      className="form-label"
                      htmlFor="basic-default-company"
                    >
                      Service Price
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="basic-default-company"
                      placeholder="₹ 9,999"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="basic-default-email">
                      Service Overview
                    </label>
                    <div className="input-group input-group-merge">
                      <textarea
                        rows={5}
                        id="basic-default-message"
                        className="form-control"
                        placeholder="Please Enter Service Overview Here"
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-text">
                      You can use letters, numbers &amp; periods
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      className="form-label"
                      htmlFor="basic-default-message"
                    >
                      Service Benifits
                    </label>
                    <textarea
                      rows={5}
                      id="basic-default-message"
                      className="form-control"
                      placeholder="Please Enter Service Benifits Here"
                      defaultValue={""}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      className="form-label"
                      htmlFor="basic-default-message"
                    >
                      Extra Benifits
                    </label>
                    <textarea
                      rows={5}
                      id="basic-default-message"
                      className="form-control"
                      placeholder="Please Enter Extra Benifits Here"
                      defaultValue={""}
                    />
                  </div>
                  <div className="mb-3">
                    <select id="defaultSelect" className="form-select">
                      <option>Service Type</option>
                      <option value="Regular Service">Regular Service</option>
                      <option value="Popular Service">Popular Service</option>
                    </select>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ width: "20%" }}
                    >
                      Post Service
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
