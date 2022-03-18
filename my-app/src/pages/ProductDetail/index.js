import React from 'react';
import { isEqual } from 'lodash';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';
import Modal from 'antd/lib/modal';
import { CloseCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons';


const { confirm } = Modal;

function ProductDetail(props) {
  

  const { 
    isLoading,
    productId,
    name,
    image,
    quantity,
    sku,
    addToCartProduct,
    
  } = props;

  const addTocartCallback = React.useCallback((props) => addToCartProduct(props,productId), [props,productId]);
  const onAddToCart = (props) => {
    console.log(props);
    addTocartCallback(props);
    
  };
  return(
    <div>
        <div className="className" style={{border: "1px solid #eee"}}>
            <img src={image}/>
            <h1>{name}</h1>
            <div>
                <div>Sku: {sku}</div>
                <div>Quantity: {quantity}</div>
            </div>
            <button onClick={() =>onAddToCart(props)}>Add to Cart</button>
        </div>
    </div>
  );
}
export default ProductDetail;