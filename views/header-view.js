// LIBS
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var classNames = require('classnames');
var Glyphicon = require('../components/glyphicon');

var HeaderView = React.createClass({

    render: function () {
        return (

            <ul {...this.getProps()}>
                <li {...this.getListItemProps()}>
                    <Link to="home">Home</Link>
                </li>
                <li {...this.getListItemProps()}>
                    <Link to="realm">Realm</Link>
                </li>
                <li {...this.getListItemProps()}>
                    <Link to="character">Character</Link>
                </li>
                <li {...this.getListItemProps()}>
                    <Link to="challenge">Challenge</Link>
                </li>
                <li {...this.getListItemProps()}>
                    <Link to="pvp">PVP</Link>
                </li>
                <li {...this.getListItemProps()}>
                    <Link to="guild">Guild</Link>
                </li>
            </ul>
        )
    },

    getProps: function () {
        return {
            className: this.getClass()
        };
    },

    getClass: function () {
        var classes = {
            'nav': true,
            'navbar-nav': true,
            'header-view': true
        };

        return classNames(classes);
    },

    getListItemProps: function () {
        return {
            className: this.getListItemClass()
        };
    },

    getListItemClass: function () {
        var classes = {
            'header-view--li-primary':true
        };

        return classNames(classes);
    }

});

module.exports = HeaderView;