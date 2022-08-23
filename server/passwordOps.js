import bcrypt from "bcrypt"

async function comparePassword(passwordToCompare, passwordHash) {
    const isSame = await bcrypt.compare(passwordToCompare, passwordHash)
    console.log("is same: ", isSame)
    return isSame
}

async function generatePasswordHash(passwordToHash, salt) {
    const passwordHash = await bcrypt.hash(passwordToHash, salt)
    console.log("hash: ", passwordHash)
    return passwordHash
}

export { comparePassword, generatePasswordHash }
