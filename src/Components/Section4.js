import React from 'react'

function Section4() {
    return (
        <div>
            <div className='container-fluid'>
                <div class='row MenuBarTextAlign'>
                    <div class='col col-3 border border-info bg-dark' style={{height: "100vh", paddingTop: "400px", color: "#00FFFF"}}>
                        <h2>ภูเขา</h2>
                    </div>

                    <div class='border border-danger bg-danger' style={{height:"100vh", width:"1%"}}></div>

                    <div class='col col border border-info bg-dark' style={{height: "100vh"}}>
                        <img style={{marginRight:"140px", marginBottom:"35px", marginTop:"50px"}} class="img-thumbnail"  src="https://upload.wikimedia.org/wikipedia/commons/0/08/Colorado_rocky_mtns.JPG" width="399" height="299"/>
                        <img style={{marginBottom:"35px", marginTop:"50px"}} class="img-thumbnail"  src="https://sites.google.com/a/samakkhi.ac.th/kha-wiphcn/_/rsrc/1505997242795/phukhea/1432097008-MountIide-o.jpg?height=213&width=320" width="399" height="299"/>
                        <img style={{marginRight:"140px", marginTop:"50px"}} class="img-thumbnail"  src="https://s359.kapook.com/rq/580/435/50/pagebuilder/1a41acf4-4285-41ad-bd28-378fa70f8321.jpg" width="399" height="299"/>
                        <img style={{marginTop:"50px"}} class="img-thumbnail"  src="https://travel.mthai.com/app/uploads/2016/12/image003.jpg" width="399" height="299"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4
