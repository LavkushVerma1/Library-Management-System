package com.LibraryManagementSystem.demo.controller;


import com.LibraryManagementSystem.demo.model.Member;
import com.LibraryManagementSystem.demo.service.MemberService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/members")
public class MemberController {
    private final MemberService memberService;
    public MemberController(MemberService memberService){
        this.memberService=memberService;
    }


    @PostMapping
    public Member addMember(
           @Valid @RequestBody Member member){
        return memberService.addMember(member);
    }
    @PutMapping("/{id}")
    public Member updateMember(@PathVariable Long id,@Valid @RequestBody Member member){
        return memberService.updateMember(id,member);
    }


    @GetMapping
    public List<Member> getAllMember(){
        return memberService.getAllMember();
    }
    @GetMapping("/{id}")
    public Member getMemberById(@PathVariable Long id){
        return memberService.getMemberById(id);
    }


    @DeleteMapping("/{id}")
    public void deleteMember(@PathVariable Long id){
        memberService.deleteMember(id);
    }


}
