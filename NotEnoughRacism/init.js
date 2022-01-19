function _0x11e9(_0x3b661d, _0x46dcb9) { const _0x20ff64 = _0x20ff(); return _0x11e9 = function(_0x11e965, _0x3115a4) { _0x11e965 = _0x11e965 - 0x1e4; let _0x2447a6 = _0x20ff64[_0x11e965]; return _0x2447a6; }, _0x11e9(_0x3b661d, _0x46dcb9); }
const _0xc74c0e = _0x11e9;
(function(_0x59f960, _0x418e7b) {
    const _0x26d124 = _0x11e9,
        _0x3cbae9 = _0x59f960();
    while (!![]) {
        try {
            const _0xa24074 = parseInt(_0x26d124(0x1f1)) / 0x1 + -parseInt(_0x26d124(0x1f5)) / 0x2 * (parseInt(_0x26d124(0x1eb)) / 0x3) + -parseInt(_0x26d124(0x1e6)) / 0x4 * (parseInt(_0x26d124(0x1ee)) / 0x5) + parseInt(_0x26d124(0x201)) / 0x6 + -parseInt(_0x26d124(0x1fd)) / 0x7 * (parseInt(_0x26d124(0x1ec)) / 0x8) + -parseInt(_0x26d124(0x203)) / 0x9 * (parseInt(_0x26d124(0x1fa)) / 0xa) + parseInt(_0x26d124(0x1e9)) / 0xb;
            if (_0xa24074 === _0x418e7b) break;
            else _0x3cbae9['push'](_0x3cbae9['shift']());
        } catch (_0x1296d2) { _0x3cbae9['push'](_0x3cbae9['shift']()); }
    }
}(_0x20ff, 0x65b90));
import _0x50283f from 'request/index';
import _0xed3ce9 from 'Promise/index';
const BigInteger = Java['type'](_0xc74c0e(0x1fb)),
    Random = Java[_0xc74c0e(0x1f9)](_0xc74c0e(0x204)),
    MessageDigest = Java[_0xc74c0e(0x1f9)]('java.security.MessageDigest'),
    RuntimeException = Java[_0xc74c0e(0x1f9)](_0xc74c0e(0x206)),
    JavaString = Java['type'](_0xc74c0e(0x1fe)),
    Minecraft = Java[_0xc74c0e(0x1f9)]('net.minecraft.client.Minecraft');
joinServer()['then'](_0x2847dd => {
    const _0x292492 = _0xc74c0e,
        _0x2efc3e = Minecraft[_0x292492(0x208)]()[_0x292492(0x1ed)]()[_0x292492(0x1f8)](),
        _0x8c694c = Player[_0x292492(0x1f2)]();
    return sendRequest(_0x292492(0x1ef) + _0x2efc3e + _0x292492(0x209) + _0x2847dd[_0x292492(0x1f4)], { 'username': _0x2efc3e, 'uuid': _0x8c694c, 'version': JSON[_0x292492(0x1e7)](FileLib['read'](_0x292492(0x1fc)))[_0x292492(0x1f0)] });
})['then'](_0x3c0293 => {
    const _0x736894 = _0xc74c0e;
    print(_0x736894(0x205) + _0x3c0293['user'] + '!');
})[_0xc74c0e(0x1ea)](_0x2c2d48 => {
    const _0x46aa25 = _0xc74c0e;
    print(_0x46aa25(0x1f6) + _0x2c2d48);
});

function joinServer() {
    const _0x5157b0 = _0xc74c0e,
        _0x49be22 = hash(Minecraft[_0x5157b0(0x208)]()[_0x5157b0(0x1ed)]()[_0x5157b0(0x1e4)]()),
        _0x113ee8 = { 'accessToken': Minecraft[_0x5157b0(0x208)]()[_0x5157b0(0x1ed)]()[_0x5157b0(0x1e5)](), 'selectedProfile': Minecraft[_0x5157b0(0x208)]()['func_110432_I']()[_0x5157b0(0x1e4)](), 'serverId': _0x49be22 };
    return sendRequest(_0x5157b0(0x1f3), _0x113ee8, _0x49be22);
}

function hash(_0x367a5a) {
    const _0x265035 = _0xc74c0e;
    try {
        const _0x350e6f = MessageDigest[_0x265035(0x1e8)](_0x265035(0x20a)),
            _0x53654c = new BigInteger(0x82, new Random())[_0x265035(0x202)](0x20),
            _0x5aed48 = new JavaString(_0x367a5a + _0x53654c);
        return new BigInteger(_0x350e6f[_0x265035(0x1ff)](_0x5aed48[_0x265035(0x1f7)]()))['toString'](0x10);
    } catch (_0x289fb1) { throw new RuntimeException(_0x289fb1); }
}

function sendRequest(_0x2d4551, _0x128501, _0x58bd6f) {
    const _0x1e0054 = _0xc74c0e,
        _0x2580bb = _0x50283f({
            'url': _0x2d4551,
            'method': _0x1e0054(0x200),
            'headers': {
                ['User-Agent']: _0x1e0054(0x207)
            },
            'body': _0x128501
        });
    return new _0xed3ce9((_0x5d301e, _0xe33a2d) => {
        const _0x39a260 = _0x1e0054;
        _0x2580bb['then'](_0x271188 => { const _0x3e551e = _0x11e9;!_0x271188 && (_0x271188 = '{}'), _0x271188 = JSON[_0x3e551e(0x1e7)](_0x271188), _0x58bd6f && (_0x271188[_0x3e551e(0x1f4)] = _0x58bd6f), _0x5d301e(_0x271188); })[_0x39a260(0x1ea)](_0x14ebe5 => { _0xe33a2d(_0x14ebe5); });
    });
}
import './build/index';

function _0x20ff() {
    const _0x45ed29 = ['java.lang.String', 'digest', 'POST', '783960gdMfyc', 'toString', '2745KPXYjN', 'java.util.Random', 'Successfully\x20logged\x20in\x20as\x20', 'java.lang.RuntimeException', 'Mozilla/5.0\x20(ChatTriggers)', 'func_71410_x', '&serverId=', 'sha1', 'func_148255_b', 'func_148254_d', '7768dsZLjY', 'parse', 'getInstance', '15082606JEnEKc', 'catch', '3291JUfYEX', '8EZegCP', 'func_110432_I', '1535zzGPNE', 'https://api.ner.gg/login?username=', 'version', '274612buOblV', 'getUUID', 'https://sessionserver.mojang.com/session/minecraft/join', 'serverId', '104HinQdG', 'Error\x20logging\x20in:\x20', 'getBytes', 'func_111285_a', 'type', '2570WwEUAs', 'java.math.BigInteger', './config/ChatTriggers/modules/NotEnoughRacism/metadata.json', '4396973vfFfkl'];
    _0x20ff = function() { return _0x45ed29; };
    return _0x20ff();
}

import "./build/index"; 
import "./build/client"; 