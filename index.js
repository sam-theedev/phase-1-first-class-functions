function receivesAFunction(callback){
        callback();

}
function returnsANamedFunction(){
    return function namedfn(){

    };
}
function returnsAnAnonymousFunction(){
    return function(){

    };
}