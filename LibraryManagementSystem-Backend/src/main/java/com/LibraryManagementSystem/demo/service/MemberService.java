package com.LibraryManagementSystem.demo.service;


import com.LibraryManagementSystem.demo.model.Member;
import com.LibraryManagementSystem.demo.repository.MemberRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MemberService {
    private final MemberRepository memberRepository;
    private MemberService(MemberRepository memberRepository){
        this.memberRepository=memberRepository;
    }
    public Member addMember(Member member) {
        return memberRepository.save(member);
    }

    public List<Member> getAllMember() {
        return memberRepository.findAll();
    }

    public Member getMemberById(Long id) {
        return memberRepository.findById(id).orElse(null);
    }

    public void deleteMember(Long id) {
        memberRepository.deleteById(id);
    }

    public Member updateMember(Long id, Member member) {
        Member exitingMember=memberRepository.findById(id).orElse(null);
        if(exitingMember!=null){
            exitingMember.setStudentName(member.getStudentName());
            exitingMember.setRollNo(member.getRollNo());
            exitingMember.setBranch(member.getBranch());
            exitingMember.setPhone(member.getPhone());
            exitingMember.setEmail(member.getEmail());
            return memberRepository.save(exitingMember);
        }
        return null;
    }
}
