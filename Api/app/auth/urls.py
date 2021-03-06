from app.auth import auth, views
from app.Common import ReturnRequest
from app.Middleware import requestPOST, TokenPost

# @auth.route('/seedtest')
# def seedtest():
#     from app.Email import SeedEmail
#     html = '<h3>点击以下链接完成账户注册验证</h3><a>{0}</a>'.format('http://illya-support.weivird.com/docs/api/')
#     SeedEmail(
#         email_title = '[ 魔法少女伊莉雅应援站(illya-support.weivird.com) ]注册账户邮箱验证',
#         email_body = '请点击链接完成账户注册验证',
#         email_html = html,
#         recipients = ['442981412@qq.com'],
#         sender = 'happys_wei@163.com'
#     )
#     return 'ok'

# @auth.route('/vcodetest')
# def vcodetest():
#     from app.Redis import CreateVcode
#     gtype, vcode = CreateVcode('',{'id':1})
#     if gtype:
#         return str(vcode)
#     return 'error'

# @auth.route('/vcodetest/<vcode>')
# def vcodetestc(vcode):
#     from app.Redis import CheckVcode
#     data = CheckVcode(vcode)
#     if data:
#         return str('成功') + str(data)
#     return str('失败')

@auth.route('/sign-in/admin', methods=["POST"])
@requestPOST
def auth_sign_in_admin(request):
    '''管理员登录
    Args
        email(str)登录邮箱
        passport(str)登录密码

    Result
        200
            token(str)请求token
            username(str)用户名
            head(str)用户头像
    '''
    c,m,d = views.auth_sign_in_admin(request.json)
    return ReturnRequest(c,m,d)

@auth.route('/sign-in', methods=["POST"])
@requestPOST
def auth_sign_in(request):
    '''登录
    Args
        email(str)登录邮箱
        passport(str)登录密码

    Result
        200
            token(str)请求token
            username(str)用户名
            head(str)用户头像
        400
            账户不存在
            账户或密码不正确
            该账户存在异常 请联系管理员
        10001
            账户未通过邮箱验证 请先完成验证
        502
            服务器出错
    '''
    c,m,d = views.auth_sign_in(request.json)
    return ReturnRequest(c,m,d)

@auth.route('/register', methods=["POST"])
@requestPOST
def auth_register(request):
    '''注册
    Args
        email(str)注册邮箱
        password(str)登录密码
        repassword(str)重复输入一次密码
        username(str)用户名已存在

    Result
        200 
            成功 {'vcode': vcode, 'email':email}
        10000
            账户未通过邮箱验证 请先完成验证
        400 
            输入信息有误
            用户名已存在
            邮箱格式有误
            邮箱已存在
            两次输入不一致
        503,502,504
            服务器出错

    '''
    c,m,d = views.auth_register(request.json)
    return ReturnRequest(c,m,d)

@auth.route('/register/again-sendemail', methods=["POST"])
@requestPOST
def auth_register_again_sendemail(request):
    '''再次发送注册验证码

    Args
        email

    Result
        200
            以重新发送 {'email':email}
        400
            该邮箱未注册
            该邮箱以验证完成 无法重复发送注册验证码
        504, 503
            服务器出错
            服务器出错
            
    '''
    c,m,d = views.auth_register_again_sendemail(request.json)
    return ReturnRequest(c,m,d)

@auth.route('/verify/register-vcode', methods=["POST"])
@requestPOST
def auth_verify_register_vcode(request):
    '''验证注册验证码
    Args
        vcode(str)验证码

    Result
        200
            验证成功
        400
            验证码有误
        502
            服务器出错
    '''
    c,m,d = views.auth_verify_register_vcode(request.json)
    return ReturnRequest(c,m,d)

@auth.route('/logout', methods=["POST"])
@TokenPost([2])
def auth_logout(request):
    '''退出登录
    Args
        null
    Result
        200 退出成功
        502 服务器出错
    '''
    c,m,d = views.auth_logout(request.json)
    return ReturnRequest(c,m,d)

@auth.route('/logout/admin', methods=["POST"])
@TokenPost([1])
def auth_logout_admin(request):
    '''退出登录管理员
    Args
        null
    Result
        200 退出成功
        502 服务器出错
    '''
    c,m,d = views.auth_logout_admin(request.json)
    return ReturnRequest(c,m,d)