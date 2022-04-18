import React from 'react';
import { isEqual } from 'lodash';
import { connect } from 'react-redux';


import Input from 'antd/lib/input';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';
import Modal from 'antd/lib/modal';
import { Layout } from 'antd';

import { v4 as uuid } from "uuid";
import { groupBy, isEmpty } from 'lodash';
import ProductDetail from '../ProductDetail';
import { createProduct , addToCartProduct , deleteItemCartProduct} from './actions';


const { Header, Footer, Sider, Content } = Layout;
function ListProducts(props){
    const { 
        products, 
        createProduct, 
        addToCartProduct, 
        deleteItemCartProduct,
        itemCart,
        isLoading 
    } = props;
    const { TextArea } = Input;
    const [numberPhone, setnumberPhone] = React.useState('');
    const [groupedProducts, setGroupedProducts] = React.useState([]);
    const [groupItemCart, setgroupItemCart] = React.useState([]);
    const handleNumberPhoneChange = evt => {
        setnumberPhone(evt.target.value);
    };
    const onAddToCartProduct = (product,productId) => {
        setQuantityProduct(productId);
        addToCartProduct(product,productId);
        
    };

    const setQuantityProduct = (idProduct) =>{
        let existing = groupedProducts.find(item => item.id === idProduct);
        if (existing) {
            existing.quantity = existing.quantity -1;
        } 
    }
    React.useEffect(() => {
        if (products) {
          setGroupedProducts(products);
        }
    }, [products]);
    
    //CArt
    React.useEffect(() => {
        if (itemCart) {
            setgroupItemCart(itemCart);
        }
    }, [itemCart]);

    const onAddPhone = (evt) => {
        evt.preventDefault();
        if (!numberPhone.length) {
          Modal.error({title: 'Please enter number phone!'});
        } else if (numberPhone.length < 10) {
          Modal.error({title: 'Ticket content must be more than 10 characters!'});
        } else {
        createProduct({
            id: uuid(),
            name: numberPhone,
            image: 'https://via.placeholder.com/150x100',
            inCart:false,
            sku: 'IP12PRM'+uuid(),
            quantity:10
          });
        }
        setnumberPhone('');
    };
    return (
        <div>
            <Row className="px-5">
                <Col xs={24}>
                <h1>List product</h1>
                </Col>
                <Col xs={24}>
                <TextArea rows={2} placeholder="Number phone..." onChange={handleNumberPhoneChange} value={numberPhone} />
                </Col>
            </Row>
            <Row>
                <Col xs={24} className="p-5">
                <Button type="primary" size="large" onClick={onAddPhone}>Add phone</Button>
                </Col>
            </Row>
            <Layout>
                <Sider>
                    <h1>
                        Mini Cart
                    </h1>
                    
                </Sider>
                <Content>
                        <Row>
                            <Col span={24}>
                            {
                
                                groupItemCart.map(product => {
                                    return (
                                    <ProductDetail 
                                        key={product.id} 
                                        isLoading={isLoading} 
                                        productId={product.id} 
                                        name={product.name}
                                        image={product.image}
                                        quantity={1}
                                        sku={product.sku}
                                        addToCartProduct={onAddToCartProduct}
                                    />
                                    )
                                })
                            
                            }
                            </Col>
                        </Row>
                    </Content>
                <Layout>
                    <Content>
                        <Row>
                            <Col span={24}>
                            {
                
                                groupedProducts.map(product => {
                                    return (
                                    <ProductDetail 
                                        key={product.id} 
                                        isLoading={isLoading} 
                                        productId={product.id} 
                                        name={product.name}
                                        image={product.image}
                                        quantity={product.quantity}
                                        sku={product.sku}
                                        addToCartProduct={onAddToCartProduct}
                                    />
                                    )
                                })
                            
                            }
                            </Col>
                        </Row>
                    </Content>
                </Layout>
                
            </Layout>
           
        </div>
        
    );
}
const mapStateToProps = state => {
    //listProductReducer : reducerr
    return {
      products: state.listProductReducer.products,
      isLoading: state.listProductReducer.isLoading,
      itemCart: state.listProductReducer.itemCart,
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      dispatch,
      createProduct: (product) => dispatch(createProduct(product)),
      addToCartProduct: (product) => dispatch(addToCartProduct(product)),
      deleteItemCartProduct: ({ productId }) => dispatch(deleteItemCartProduct({ productId })),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ListProducts);

