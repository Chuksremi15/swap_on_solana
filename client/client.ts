// Client must derive and provide ALL accounts
const tx = await program.methods
  .makeOffer(id, amountA, amountB)
  .accounts({
    maker: userWallet, // ← Derived from user
    tokenMintA: usdcMint, // ← Known mint address
    makerTokenAccountA: userUsdcAccount, // ← Derived ATA
    offer: offerAddress, // ← Derived PDA
    vault: vaultAddress, // ← Derived ATA
    systemProgram: SystemProgram.programId, // ← Known program
    tokenProgram: TOKEN_PROGRAM_ID, // ← Known program
    associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID, // ← Known program
  })
  .rpc();
