import webpack from 'webpack';

//import 'jquery';
new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
});

//import 'bootstrap';
//import 'bootstrap-input-spinner';