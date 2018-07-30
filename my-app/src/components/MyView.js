// import React, { Component } from "react";
// import PropTypes from 'prop-types';
//
// import sizeMe from 'react-sizeme';
//
// function MyView(props) {
//     const { width, height } = props.size;
//
//     // const ToRenderChild = height > 600
//     //     ? LargeChildComponent
//     //     : SmallChildComponent;
//
//     return (
//         <div>
//             <h1>My size is {width}x{height}</h1>
//             <ToRenderChild />
//         </div>
//     );
// }
//
// MyView.propTypes = {
//     size: PropTypes.shape({
//         width: PropTypes.number.isRequired,
//         height: PropTypes.number.isRequired,
//     })
// }
//
// export default sizeMe({ monitorHeight: true })(MyView);