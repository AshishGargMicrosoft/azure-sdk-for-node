/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var util = require('util');

/**
 * @class
 * Initializes a new instance of the ResponseWithContinuationCost class.
 * @constructor
 * The response of a list operation.
 * @member {array} [value] Results of the list operation.
 * 
 * @member {string} [nextLink] Link for next set of results.
 * 
 */
function ResponseWithContinuationCost() {
}

util.inherits(ResponseWithContinuationCost, Array);

/**
 * Defines the metadata of ResponseWithContinuationCost
 *
 * @returns {object} metadata of ResponseWithContinuationCost
 *
 */
ResponseWithContinuationCost.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ResponseWithContinuation[Cost]',
    type: {
      name: 'Composite',
      className: 'ResponseWithContinuationCost',
      modelProperties: {
        value: {
          required: false,
          serializedName: '',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'CostElementType',
                type: {
                  name: 'Composite',
                  className: 'Cost'
                }
            }
          }
        },
        nextLink: {
          required: false,
          serializedName: 'nextLink',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = ResponseWithContinuationCost;