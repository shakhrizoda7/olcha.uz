import './index.css';
import './App.css';

function App() {
  return (
    <div>
      <header className='shadow-sm w-100 p-2 px-3'>
        <div className="container-fluid py-3">
          <img src="https://olcha.uz/_nuxt/plus.lRzD4Jf7.png" className='logoIcon'/>
        </div>
      </header>

      <main id="main">
        <section id="product">
          <div className="container-fluid cardContainer">
            <div className="row my-5 gap-4">

              {/* card 1 */}
              <div className="col-sm-6 col-md-4 col-lg-3 card border-0 py-3 bg-transparent">
                <img src="https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-07-29/uel0TmctQBCuuPqyfNuO3r9TR3kiIrKFxmOtQv1YOeR2wtgDHo1cOYIQGeYc.jpg" alt="" className='d-block productImg'/>
                <a href="#" className="groupName text-secondary-emphasis fs-6 text-decoration-none mt-3">Игровая Sony PlayStation</a>

                <div className="priceDiv d-flex flex-column mt-5">
                  <p className='price m-0 fs-5 fw-medium'>6 699 000 сум</p>
                  <p className='priceMonth bg-warning w-75 rounded ps-2 py-1'>785 000 сум x 12 мес</p>
                </div>

                <div className='btnsDiv'>
                  <button className='karzinkaBtn'></button>
                  <button className='rassrochkaBtn mt-3 px-4 py-1 border border-danger rounded-3 bg-transparent text-danger'>В рассрочку</button>
                </div>
              </div>

              {/* card 2 */}
              <div className="col-sm-6 col-md-4 col-lg-3 card border-0 py-3 bg-transparent">
                <img src="https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-07-29/gmKpama5ndJd3cUB58hzcHazjK1bxWBL7Nbwqzawn5M994yNNU1OYJRyDp6Y.jpg" alt="" className='d-block productImg'/>
                <a href="#" className="groupName text-secondary-emphasis fs-6 text-decoration-none mt-3">Honor X7b 8/128 GB</a>

                <div className="priceDiv d-flex flex-column mt-5">
                  <p className='price m-0 fs-5 fw-medium'>2 295 000 сум</p>
                  <p className='priceMonth bg-warning w-75 rounded ps-2 py-1'>269 000 сум x 12 мес</p>
                </div>

                <div className='btnsDiv'>
                  <button className='karzinkaBtn'></button>
                  <button className='rassrochkaBtn mt-3 px-4 py-1 border border-danger rounded-3 bg-transparent text-danger'>В рассрочку</button>
                </div>
              </div>

              {/* card 3 */}
              <div className="col-sm-6 col-md-4 col-lg-3 card border-0 py-3 bg-transparent">
                <img src="https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-07-24/GXnlCe9OvklS1p0BdVMR0qp9NhQhJQz3ySaRmEnz7XbK8BjnEPLZhKxR2gzw.jpg" alt="" className='d-block productImg'/>
                <a href="#" className="groupName text-secondary-emphasis fs-6 text-decoration-none mt-3">Apple iPhone 15 Pro</a>

                <div className="priceDiv d-flex flex-column mt-5">
                  <p className='price m-0 fs-5 fw-medium'>13 399 000 сум</p>
                  <p className='priceMonth bg-warning w-75 rounded ps-2 py-1'>1 570 000 сум x 12 мес</p>
                </div>

                <div className='btnsDiv'>
                  <button className='karzinkaBtn'></button>
                  <button className='rassrochkaBtn mt-3 px-4 py-1 border border-danger rounded-3 bg-transparent text-danger'>В рассрочку</button>
                </div>                
              </div>

              {/* card 4 */}
              <div className="col-sm-6 col-md-4 col-lg-3 card border-0 py-3 bg-transparent">
                <img src="https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-07-29/X9ag7McgovFRdMkNVM69vPvV9ycaMgFEgN1iqQdKx3PIuxrkQ849nyGPbaXD.jpg" alt="" className='d-block productImg'/>
                <a href="#" className="groupName text-secondary-emphasis fs-6 text-decoration-none mt-3">Xiaomi Redmi 12</a>

                <div className="priceDiv d-flex flex-column mt-5">
                  <p className='price m-0 fs-5 fw-medium'>1 190 000 сум</p>
                  <p className='priceMonth bg-warning w-75 rounded ps-2 py-1'>234 000 сум x 12 мес</p>
                </div>

                <div className='btnsDiv'>
                  <button className='karzinkaBtn'></button>
                  <button className='rassrochkaBtn mt-3 px-4 py-1 border border-danger rounded-3 bg-transparent text-danger'>В рассрочку</button>
                </div>
              </div>

              {/* card 5 */}
              <div className="col-sm-6 col-md-4 col-lg-3 card border-0 py-3 bg-transparent">
                <img src="https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-08-02/bnK9uRgVG9tyAdlxGzfMvaztbKCINaeTWtkYxjnjCGhoFTFRM7skgSOtDddM.jpg" alt="" className='d-block productImg'/>
                <a href="#" className="groupName text-secondary-emphasis fs-6 text-decoration-none mt-3">Samsung Galaxy A15</a>

                <div className="priceDiv d-flex flex-column mt-5">
                  <p className='price m-0 fs-5 fw-medium'>2 099 000 сум</p>
                  <p className='priceMonth bg-warning w-75 rounded ps-2 py-1'>246 000 сум x 12 мес</p>
                </div>

                <div className='btnsDiv'>
                  <button className='karzinkaBtn'></button>
                  <button className='rassrochkaBtn mt-3 px-4 py-1 border border-danger rounded-3 bg-transparent text-danger'>В рассрочку</button>
                </div>
              </div>

              {/* card 6 */}
              <div className="col-sm-6 col-md-4 col-lg-3 card border-0 py-3 bg-transparent">
                <img src="https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-07-29/U2sN2UcpfFt8DP243Sv7u6qUNi3HcmhfZtRTiQAKFsFRE61RnzZRBcnkMq7B.jpg" alt="" className='d-block productImg'/>
                <a href="#" className="groupName text-secondary-emphasis fs-6 text-decoration-none mt-3">Xiaomi Redmi Note 13</a>

                <div className="priceDiv d-flex flex-column mt-5">
                  <p className='price m-0 fs-5 fw-medium'>2 287 000 сум</p>
                  <p className='priceMonth bg-warning w-75 rounded ps-2 py-1'>268 000 сум x 12 мес</p>
                </div>

                <div className='btnsDiv'>
                  <button className='karzinkaBtn'></button>
                  <button className='rassrochkaBtn mt-3 px-4 py-1 border border-danger rounded-3 bg-transparent text-danger'>В рассрочку</button>
                </div>
              </div>

              {/*card 7*/}
              <div className="col-sm-6 col-md-4 col-lg-3 card border-0 py-3 bg-transparent">
                <img src="https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-07-29/48HWaawTxY3boTO1JB9NZS0gEK8EbkLaY3QMDjFXrSk3OK62XS9ek9lhkP7Q.jpg" alt="" className='d-block productImg'/>
                <a href="#" className="groupName text-secondary-emphasis fs-6 text-decoration-none mt-3">Samsung Galaxy S24</a>

                <div className="priceDiv d-flex flex-column mt-5">
                  <p className='price m-0 fs-5 fw-medium'>8 704 000 сум</p>
                  <p className='priceMonth bg-warning w-75 rounded ps-2 py-1'>1 020 000 сум x 12 мес</p>
                </div>

                <div className='btnsDiv'>
                  <button className='karzinkaBtn'></button>
                  <button className='rassrochkaBtn mt-3 px-4 py-1 border border-danger rounded-3 bg-transparent text-danger'>В рассрочку</button>
                </div>
              </div>

              {/* card 8 */}
              <div className="col-sm-6 col-md-4 col-lg-3 card border-0 py-3 bg-transparent">
                <img src="https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-07-24/AK75xdKuWk5l7Q7GJt95BArGIb8YzAxpHeOnxvlzk6zFA16WSmZxDCfxkHIx.jpg" alt="" className='d-block productImg'/>
                <a href="#" className="groupName text-secondary-emphasis fs-6 text-decoration-none mt-3">Xiaomi Redmi 13C</a>

                <div className="priceDiv d-flex flex-column mt-5">
                  <p className='price m-0 fs-5 fw-medium'>1 598 000 сум</p>
                  <p className='priceMonth bg-warning w-75 rounded ps-2 py-1'>188 000 сум x 12 мес</p>
                </div>

                <div className='btnsDiv'>
                  <button className='karzinkaBtn'></button>
                  <button className='rassrochkaBtn mt-3 px-4 py-1 border border-danger rounded-3 bg-transparent text-danger'>В рассрочку</button>
                </div>
              </div>

              {/* card 9 */}
              <div className="col-sm-6 col-md-4 col-lg-3 card border-0 py-3 bg-transparent">
                <img src="https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-07-29/6CA2LG733Q5z5pL8S0u85Zb9zr3IEV0BqS521xkvJUYmKB9VrIlzY8msjrxc.jpg" alt="" className='d-block productImg'/>
                <a href="#" className="groupName text-secondary-emphasis fs-6 text-decoration-none mt-3">Samsung Galaxy A35</a>

                <div className="priceDiv d-flex flex-column mt-5">
                  <p className='price m-0 fs-5 fw-medium'>4 200 000 сум</p>
                  <p className='priceMonth bg-warning w-75 rounded ps-2 py-1'>442 000 сум x 12 мес</p>
                </div>

                <div className='btnsDiv'>
                  <button className='karzinkaBtn'></button>
                  <button className='rassrochkaBtn mt-3 px-4 py-1 border border-danger rounded-3 bg-transparent text-danger'>В рассрочку</button>
                </div>
              </div>

              {/* card 10 */}
              <div className="col-sm-6 col-md-4 col-lg-3 card border-0 py-3 bg-transparent">
                <img src="https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-07-29/Eg0izQU1CgoBH9m2PzQyKPq4cFyPy0XKf1fPrB3dD1sFXqSsfv3ofmqU7YKw.jpg" alt="" className='d-block productImg'/>
                <a href="#" className="groupName text-secondary-emphasis fs-6 text-decoration-none mt-3">Игровая Sony PlayStation</a>

                <div className="priceDiv d-flex flex-column mt-5">
                  <p className='price m-0 fs-5 fw-medium'>6 699 000 сум</p>
                  <p className='priceMonth bg-warning w-75 rounded ps-2 py-1'>785 000 сум x 12 мес</p>
                </div>

                <div className='btnsDiv'>
                  <button className='karzinkaBtn'></button>
                  <button className='rassrochkaBtn mt-3 px-4 py-1 border border-danger rounded-3 bg-transparent text-danger'>В рассрочку</button>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
