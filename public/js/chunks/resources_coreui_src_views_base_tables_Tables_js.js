(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_coreui_src_views_base_tables_Tables_js"],{

/***/ "./resources/coreui/src/views/base/tables/Tables.js":
/*!**********************************************************!*\
  !*** ./resources/coreui/src/views/base/tables/Tables.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'src/reusable'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _users_UsersData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../users/UsersData */ "./resources/coreui/src/views/users/UsersData.js");





var getBadge = function getBadge(status) {
  switch (status) {
    case 'Active':
      return 'success';

    case 'Inactive':
      return 'secondary';

    case 'Pending':
      return 'warning';

    case 'Banned':
      return 'danger';

    default:
      return 'primary';
  }
};

var fields = ['name', 'registered', 'role', 'status'];

var Tables = function Tables() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
    xs: "12",
    lg: "6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, null, "Simple Table", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'src/reusable'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    name: "CModal"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDataTable, {
    items: _users_UsersData__WEBPACK_IMPORTED_MODULE_3__.default,
    fields: fields,
    itemsPerPage: 5,
    pagination: true,
    scopedSlots: {
      'status': function status(item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
          color: getBadge(item.status)
        }, item.status));
      }
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
    xs: "12",
    lg: "6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, null, "Striped Table"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDataTable, {
    items: _users_UsersData__WEBPACK_IMPORTED_MODULE_3__.default,
    fields: fields,
    striped: true,
    itemsPerPage: 5,
    pagination: true,
    scopedSlots: {
      'status': function status(item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
          color: getBadge(item.status)
        }, item.status));
      }
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
    xs: "12",
    lg: "6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, null, "Condensed Table"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDataTable, {
    items: _users_UsersData__WEBPACK_IMPORTED_MODULE_3__.default,
    fields: fields,
    size: "sm",
    itemsPerPage: 5,
    pagination: true,
    scopedSlots: {
      'status': function status(item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
          color: getBadge(item.status)
        }, item.status));
      }
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
    xs: "12",
    lg: "6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, null, "Bordered Table"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDataTable, {
    items: _users_UsersData__WEBPACK_IMPORTED_MODULE_3__.default,
    fields: fields,
    bordered: true,
    itemsPerPage: 5,
    pagination: true,
    scopedSlots: {
      'status': function status(item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
          color: getBadge(item.status)
        }, item.status));
      }
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, null, "Combined All Table"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDataTable, {
    items: _users_UsersData__WEBPACK_IMPORTED_MODULE_3__.default,
    fields: fields,
    hover: true,
    striped: true,
    bordered: true,
    size: "sm",
    itemsPerPage: 10,
    pagination: true,
    scopedSlots: {
      'status': function status(item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
          color: getBadge(item.status)
        }, item.status));
      }
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, null, "Combined All dark Table"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDataTable, {
    items: _users_UsersData__WEBPACK_IMPORTED_MODULE_3__.default,
    fields: fields,
    dark: true,
    hover: true,
    striped: true,
    bordered: true,
    size: "sm",
    itemsPerPage: 10,
    pagination: true,
    scopedSlots: {
      'status': function status(item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
          color: getBadge(item.status)
        }, item.status));
      }
    }
  }))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tables);

/***/ }),

/***/ "./resources/coreui/src/views/users/UsersData.js":
/*!*******************************************************!*\
  !*** ./resources/coreui/src/views/users/UsersData.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var usersData = [{
  id: 0,
  name: 'John Doe',
  registered: '2018/01/01',
  role: 'Guest',
  status: 'Pending'
}, {
  id: 1,
  name: 'Samppa Nori',
  registered: '2018/01/01',
  role: 'Member',
  status: 'Active'
}, {
  id: 2,
  name: 'Estavan Lykos',
  registered: '2018/02/01',
  role: 'Staff',
  status: 'Banned'
}, {
  id: 3,
  name: 'Chetan Mohamed',
  registered: '2018/02/01',
  role: 'Admin',
  status: 'Inactive'
}, {
  id: 4,
  name: 'Derick Maximinus',
  registered: '2018/03/01',
  role: 'Member',
  status: 'Pending'
}, {
  id: 5,
  name: 'Friderik Dávid',
  registered: '2018/01/21',
  role: 'Staff',
  status: 'Active'
}, {
  id: 6,
  name: 'Yiorgos Avraamu',
  registered: '2018/01/01',
  role: 'Member',
  status: 'Active'
}, {
  id: 7,
  name: 'Avram Tarasios',
  registered: '2018/02/01',
  role: 'Staff',
  status: 'Banned'
}, {
  id: 8,
  name: 'Quintin Ed',
  registered: '2018/02/01',
  role: 'Admin',
  status: 'Inactive'
}, {
  id: 9,
  name: 'Enéas Kwadwo',
  registered: '2018/03/01',
  role: 'Member',
  status: 'Pending'
}, {
  id: 10,
  name: 'Agapetus Tadeáš',
  registered: '2018/01/21',
  role: 'Staff',
  status: 'Active'
}, {
  id: 11,
  name: 'Carwyn Fachtna',
  registered: '2018/01/01',
  role: 'Member',
  status: 'Active'
}, {
  id: 12,
  name: 'Nehemiah Tatius',
  registered: '2018/02/01',
  role: 'Staff',
  status: 'Banned'
}, {
  id: 13,
  name: 'Ebbe Gemariah',
  registered: '2018/02/01',
  role: 'Admin',
  status: 'Inactive'
}, {
  id: 14,
  name: 'Eustorgios Amulius',
  registered: '2018/03/01',
  role: 'Member',
  status: 'Pending'
}, {
  id: 15,
  name: 'Leopold Gáspár',
  registered: '2018/01/21',
  role: 'Staff',
  status: 'Active'
}, {
  id: 16,
  name: 'Pompeius René',
  registered: '2018/01/01',
  role: 'Member',
  status: 'Active'
}, {
  id: 17,
  name: 'Paĉjo Jadon',
  registered: '2018/02/01',
  role: 'Staff',
  status: 'Banned'
}, {
  id: 18,
  name: 'Micheal Mercurius',
  registered: '2018/02/01',
  role: 'Admin',
  status: 'Inactive'
}, {
  id: 19,
  name: 'Ganesha Dubhghall',
  registered: '2018/03/01',
  role: 'Member',
  status: 'Pending'
}, {
  id: 20,
  name: 'Hiroto Šimun',
  registered: '2018/01/21',
  role: 'Staff',
  status: 'Active'
}, {
  id: 21,
  name: 'Vishnu Serghei',
  registered: '2018/01/01',
  role: 'Member',
  status: 'Active'
}, {
  id: 22,
  name: 'Zbyněk Phoibos',
  registered: '2018/02/01',
  role: 'Staff',
  status: 'Banned'
}, {
  id: 23,
  name: 'Aulus Agmundr',
  registered: '2018/01/01',
  role: 'Member',
  status: 'Pending'
}, {
  id: 42,
  name: 'Ford Prefect',
  registered: '2001/05/25',
  role: 'Alien',
  status: 'Don\'t panic!'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usersData);

/***/ })

}]);