const User = require("../models/User")
const UserData = require("../models/UserData")
const RgData = require("../models/RgData")
const TitleData = require("../models/TitleData")
const Address = require("../models/Address")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const connection = require("../services/db")

class UserController {

    list = async (req, res) => {
        try {
            
            const users = await User.findAll();
            res.status(200).json(users);
        } catch (error) {
            console.log(error)
        }
    }

    // readById = async (req, res) => {
    //     try {
    //         const { id } = req.params

    //         const query = `
    //         SELECT d.*, u.*, rg.*, t.*, e.*
    //         FROM melies.tb_dados_pessoais AS d 
    //         INNER JOIN melies.tb_usuario AS u ON d.ID = u.DADOS_PESSOAIS_ID
    //         INNER JOIN melies.tb_dados_rg AS rg ON d.ID = rg.DADOS_PESSOAIS_ID
    //         INNER JOIN melies.tb_dados_titulo AS t ON d.ID = t.DADOS_PESSOAIS_ID
    //         INNER JOIN melies.tb_endereco AS e ON d.ID = e.DADOS_PESSOAIS_ID
    //         WHERE d.ID=${id};
    //         `
    //         const response = await db.excecute(query)
    //         res.status(200).json(response);
    //     } catch (error) {
    //         res.status(500).send(error)
    //     }
    // }

    // login = async (req, res) => {

    //     const { usuario, senha } = req.body

    //     try {
    //         const user = await UserModel.login(usuario)
    //         const result = await bcrypt.compare(senha, user.senha)

    //         if (!result) return res.status(401).json({ msg: 'Invalid Credentials' })

    //         let JWT_KEY = 'melies@admin';
    //         const jwtToken = jwt.sign(
    //             {
    //                 userId: user.id,
    //             },
    //             JWT_KEY,
    //             {
    //                 expiresIn: '24h'
    //             }
    //         )

    //         return res.status(200).json(jwtToken)
    //     } catch (error) {
    //         console.error(error);
    //         return res.status(500).json({ msg: 'API error' });
    //     }
    // }
    create = async (req, res) => {
        const { userData, personalData, address, rgData, titleData } = req.body;

        const salt = await bcrypt.genSalt(10)
        const hashPass = await bcrypt.hash(userData.password, salt)
        const newUser = { ...userData, password: hashPass }

        try {

            const user = await UserData.create(personalData)
            await RgData.create({ ...rgData, user_data_id: user.id })
            await TitleData.create({ ...titleData, user_data_id: user.id })
            await Address.create({ ...address, user_data_id: user.id })
            const userCreated = await User.create({ ...newUser, user_data_id: user.id })

            res.status(200).send({ msg: 'Erro ao cadastrar usuario:', userCreated })
        } catch (error) {
            res.status(500).send({ msg: 'Erro ao cadastrar usuario:', error })
        }

    }
    // cadastro = async (req, res) => {
    //     const {
    //         usuario,
    //         dados_pessoais,
    //         dados_titulo,
    //         dados_rg,
    //         endereco } = req.body;

    //     const senhaProtegida = await bcrypt.genSalt(10)
    //     const senhaSegura = await bcrypt.hash(usuario.senha, senhaProtegida)
    //     const usuarioNovo = { ...usuario, senha: senhaSegura }

    //     try {

    //         const dadosPessoaisId = await UserDataModel.add(dados_pessoais);
    //         await TitleDataModel.add(dadosPessoaisId, dados_titulo);
    //         await RgDataModel.add(dadosPessoaisId, dados_rg);
    //         await AddressModel.add(dadosPessoaisId, endereco);
    //         await UserModel.add(dadosPessoaisId, usuarioNovo);

    //         res.status(200).send({ msg: 'Usuario cadastrado com sucesso!' })
    //     } catch (error) {
    //         res.status(500).send({ msg: 'Erro ao cadastrar usuario:', error })
    //     }

    // }

    // loginToken = async (req, res) => {

    //     try {
    //         const { userId } = req.currentUser
    //         const user = await UserModel.loginByToken(userId)

    //         if (user.id) {
    //             let JWT_KEY = 'melies@admin';
    //             const jwtToken = jwt.sign(
    //                 {
    //                     userId: user.id,
    //                 },
    //                 JWT_KEY,
    //             )

    //             return res.status(200).json(id, jwtToken)
    //         }

    //     } catch (error) {
    //         res.status(500).json(error)
    //     }
    // }

}

module.exports = new UserController();