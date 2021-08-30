import React from "react";
import {Link} from 'react-router-dom';

class PortfolioElement extends React.Component {
    render(){
        if (this.props.demoType != "video") {
            var link = (
                <button onClick={()=> window.location.href=this.props.link} className="m-11 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                </svg>
                Demo
            </button>
            )
        } 
        else {
            link = (
                <button onClick={()=> <Link to= {{pathname:"/video", videoPath:this.props.link}}></Link>} className="m-11 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                </svg>
                Demo
            </button>
            )
        }
    return (
        <div
        className="sm:w-1/2 w-100 p-4">
            <div className="flex relative">
                <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={this.props.image}
                />

                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {this.props.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                    {this.props.title}
                    </h1>
                    <p className="leading-relaxed">{this.props.description}</p>
                </div>

            </div>

            <button onClick={()=> window.location.href=this.props.github} className="m-11 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <img src="./media/github.png"></img>
                Code
            </button>

            {link}
                
            
        </div>
        )
    }
}

export default PortfolioElement;
