/**
 * Copyright © 2015 Customer Paradigm. All rights reserved.
 * See COPYING.txt for license details.
 */
var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/action/place-order': {
                'CustomerParadigm_OrderComments/js/model/place-order-with-comments-mixin': true
            }
        }
    }
};