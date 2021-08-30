import React from 'react';


const References = () =>{
    return(
        <section id="references">
        <div className="mx-20 mt-20 flex flex-col items-center">
            <h1 className="sm:text-4xl text-3xl font-mono title-font mb-4 text-white">
                References
            </h1>
            <ul className="list-none flex flex-row pb-20">
                <li className="mx-10 bg-red-600 rounded flex-1 shadow-inners">
                <div className="m-8">
                    <h3 className="text-center">Nathan Bean</h3>
                    <p>Nathan is an instructor at Kansas State University with over 16 years of experience teaching at the college level.
                        Fall 2021 is the third semester that I have TA'd for Mr. Bean.
                    </p>
                    <p>phone: <span>111-111-1111</span>
                    </p>
                    <p>email: <span>not_real@nathan.com</span>
                    </p>
                </div>
                    
                </li>
                <li className="mx-10 bg-red-600 rounded flex-1 shadow-inner">
                <div className="m-8">
                    <h3 className="text-center">Russell Greene</h3>
                    <p>Russell is a team manager in the loading department at The Onyx Collection.
                        I have worked with Russell for 2 years at Onyx, both on his shift and the second shift.
                    </p>
                    <p>phone: <span>111-111-1111</span>
                    </p>
                    <p>email: <span>not_real@russell.com</span>
                    </p>
                </div>
                    
                </li>
                <li className="mx-10 bg-red-600 rounded flex-1 shadow-inner">
                    <div className="m-8">
                    <h3 className="text-center">Nicholas Reinart</h3>
                    <p>Nick is the manager of the loading department at the Onyx Collection.
                        I started at The Onyx Collection over four years ago, he and I both began working in the loading
                        department around the same time. I have since almost graduated from college and he has worked his way 
                        into a leading role at the company.
                    </p>
                    <p>phone: <span>111-111-1111</span>
                    </p>
                    <p>email: <span>not_real@reinart.com</span>
                    </p>
                    </div>
                    
                </li>
            </ul>
        </div>
    </section>

        
    )
}
export default References;