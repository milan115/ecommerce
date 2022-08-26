import React from 'react';
import TopCart from './TopCart';
import './style.css'

const TopCate = () => {
    return (
        <div>
            <section className="topCat background">
                <div className="container">
                    <div className="heading d_flex">
                        <div className="heading-left row f_flex">
                            <i className="fa fa-border-all"></i>
                            <h2>Top Categories</h2>
                        </div>
                        <div className="heading-right row">
                            <span>View all</span>
                            <i className="fa fa-caret-right"></i>
                        </div>
                    </div>
                    <TopCart/>
                </div>
            </section>
        </div>
    );
};

export default TopCate;